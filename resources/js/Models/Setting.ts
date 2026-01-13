import SettingTypeEnum from "@/Enums/SettingTypeEnum";

type SettingBase<T extends SettingTypeEnum, V extends any> = {
    id: number;
    key: string;
    label: string;
    structure: {
        value_type: T;
        options?: string[];
        resource_api?: string;
        resource_label?: string;
        resource_value?: string;
        is_translated?: boolean;
        is_multiple?:boolean;
    };
    value?: V | undefined;
    description?: string;
};

type StringSetting = SettingBase<SettingTypeEnum.STRING, string>;
type NumericSetting = SettingBase<SettingTypeEnum.NUMERIC, number>;
type BooleanSetting = SettingBase<SettingTypeEnum.BOOLEAN, boolean>;
type DateSetting = SettingBase<SettingTypeEnum.DATE, string>;
type TimeSetting = SettingBase<SettingTypeEnum.TIME, string>;
type DateTimeSetting = SettingBase<SettingTypeEnum.DATETIME, string>;
type TranslatableSetting = SettingBase<SettingTypeEnum.TRANSLATABLE, string>;
type TextSetting = SettingBase<SettingTypeEnum.TEXT, string>;
type HTMLTextSetting = SettingBase<SettingTypeEnum.HTML_TEXT, string>;
type SelectSetting = SettingBase<SettingTypeEnum.SELECT, string>;
type ResourceSetting = SettingBase<SettingTypeEnum.RESOURCE, string>;

export type Setting =
    | StringSetting
    | NumericSetting
    | BooleanSetting
    | DateSetting
    | TimeSetting
    | DateTimeSetting
    | TranslatableSetting
    | TextSetting
    | HTMLTextSetting
    | SelectSetting
    | ResourceSetting;
