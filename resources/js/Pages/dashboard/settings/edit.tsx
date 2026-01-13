import Input from "@/components/form/fields/Input";
import Radio from "@/components/form/fields/Radio";
import ApiSelect from "@/components/form/fields/selects/ApiSelect";
import Select from "@/components/form/fields/selects/Select";
import TextEditor from "@/components/form/fields/TextEditor";
import Form from "@/components/form/Form";
import { Label } from "@/components/ui/labels-and-values/Label";
import PageCard from "@/components/ui/PageCard";
import { Textarea } from "@/components/ui/shadcn/textarea";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import SettingTypeEnum from "@/Enums/SettingTypeEnum";
import { getNestedPropertyValue } from "@/helper";
import { Setting } from "@/Models/Setting";
import { translate } from "@/Models/Translatable";
import ApiResponse from "@/Modules/Http/ApiResponse";
import HTTP from "@/Modules/Http/Http";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ setting }: { setting: Setting }) => {
    const { post, processing, setData } = useForm<{
        value: string | number | boolean | undefined;
        _method: "PUT";
    }>({
        value: setting.value,
        _method: "PUT",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.protected.settings.update", setting.id));
    };

    function getInputBySettingType() {
        switch (setting.structure.value_type) {
            case SettingTypeEnum.BOOLEAN:
                return (
                    <Radio
                        name={"value"}
                        items={[
                            { label: "Yes", value: "1" },
                            { label: "No", value: "0" },
                        ]}
                        onChange={(e) => setData("value", e)}
                        label={"Value"}
                        checked={`${setting.value}`}
                    />
                );

            case SettingTypeEnum.DATE:
                return (
                    <Input
                        name={"value"}
                        label={"Value"}
                        type={"date"}
                        onChange={(e) => {
                            setData("value", e.target.value);
                        }}
                        defaultValue={setting.value}
                    />
                );

            case SettingTypeEnum.DATETIME:
                return (
                    <Input
                        name={"value"}
                        label={"Value"}
                        type={"datetime-local"}
                        onChange={(e) => {
                            setData(
                                "value",
                                e.target?.value?.replace("T", " "),
                            );
                        }}
                        defaultValue={setting.value}
                    />
                );

            case SettingTypeEnum.HTML_TEXT:
                return (
                    <div className={"md:col-span-2"}>
                        <TextEditor
                            name={"value"}
                            label={"Value"}
                            onChange={(v) => setData("value", v)}
                            defaultValue={setting.value as string}
                        />
                    </div>
                );

            case SettingTypeEnum.NUMERIC:
                return (
                    <Input
                        name={"value"}
                        label={"Value"}
                        onChange={(e) => setData("value", e.target.value)}
                        type={"number"}
                        defaultValue={setting.value}
                    />
                );

            case SettingTypeEnum.STRING:
                return (
                    <Input
                        name={"value"}
                        label={"Value"}
                        onChange={(e) => setData("value", e.target.value)}
                        type={"text"}
                        defaultValue={setting.value}
                    />
                );

            case SettingTypeEnum.TIME:
                return (
                    <Input
                        name={"value"}
                        label={"Value"}
                        type={"time"}
                        onChange={(e) => {
                            setData("value", e.target.value);
                        }}
                        defaultValue={setting.value}
                    />
                );

            case SettingTypeEnum.TEXT:
                return (
                    <Label className={"md:col-span-2"} col label={"Value"}>
                        <Textarea
                            name={"value"}
                            onChange={(e) => setData("value", e.target.value)}
                            defaultValue={setting.value as string}
                        />
                    </Label>
                );
            case SettingTypeEnum.SELECT:
                return (
                    <Select
                        data={setting?.structure?.options ?? []}
                        onChange={(v) => {
                            setData("value", v);
                        }}
                        label={"Value"}
                        selected={setting.value as string}
                    />
                );
            case SettingTypeEnum.RESOURCE:
                return (
                    <ApiSelect
                        label={
                            translate(setting.label) +
                            ` - Current Value : ${setting.value}`
                        }
                        api={(page?: number, search?: string) => {
                            if (setting?.structure?.resource_api) {
                                return HTTP.make<any>().get(
                                    setting.structure.resource_api,
                                    {
                                        page: page,
                                        search: search,
                                    },
                                );
                            } else
                                return Promise.resolve(
                                    new ApiResponse(
                                        [],
                                        false,
                                        404,
                                        "Undefined ROUTE",
                                        undefined,
                                    ),
                                );
                        }}
                        getDataArray={function (response) {
                            return response.data;
                        }}
                        getIsLast={function (data) {
                            return data.paginate?.is_last_page ?? true;
                        }}
                        getTotalPages={function (data) {
                            return data?.paginate?.total_pages ?? 0;
                        }}
                        getOptionValue={(item) =>
                            getNestedPropertyValue(
                                item,
                                setting?.structure?.resource_value ?? "id",
                            )
                        }
                        getOptionLabel={(item) =>
                            setting?.structure?.is_translated
                                ? translate(
                                      getNestedPropertyValue(
                                          item,
                                          setting?.structure?.resource_label ??
                                              "",
                                      ),
                                  )
                                : getNestedPropertyValue(
                                      item,
                                      setting?.structure?.resource_label ?? "",
                                  )
                        }
                        isMultiple={setting?.structure?.is_multiple ?? false}
                        onChange={(e, valuesArray) => {
                            if (setting.structure.is_multiple) {
                                setData("value", JSON.stringify(valuesArray));
                            } else {
                                setData("value", e.target.value);
                            }
                        }}
                    />
                );
        }
    }

    return (
        <PageCard title={`Edit: ${translate(setting.label)}`}>
            {setting.structure.value_type == SettingTypeEnum.TRANSLATABLE ? (
                <TranslatableInputsContext>
                    <Form onSubmit={onSubmit} processing={processing}>
                        <div
                            className={
                                "grid grid-cols-1 items-start gap-5 md:grid-cols-2"
                            }
                        >
                            {getInputBySettingType()}
                        </div>
                    </Form>
                </TranslatableInputsContext>
            ) : (
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={
                            "grid grid-cols-1 items-start gap-5 md:grid-cols-2"
                        }
                    >
                        {getInputBySettingType()}
                        <div className={"md:col-span-2"}>
                            {translate(setting.description)}
                        </div>
                    </div>
                </Form>
            )}
        </PageCard>
    );
};
export default Edit;
