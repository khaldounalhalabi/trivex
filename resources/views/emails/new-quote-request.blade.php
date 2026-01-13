<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="background-color: #f9f4e8; margin: 0; padding: 0"
>
    <tr>
        <td align="center" style="padding: 10px">
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                    max-width: 600px;
                    background-color: #ffffff;
                    border: 1px solid #e0d9cc;
                    border-radius: 2px;
                "
            >
                <tr>
                    <td
                        align="center"
                        style="
                            padding: 30px 20px;
                            background-color: #ffffff;
                            border-bottom: 1px solid #f9f4e8;
                        "
                    >
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        font-family:
                                            'Helvetica Neue', Arial, sans-serif;
                                        font-size: 24px;
                                        font-weight: bold;
                                        color: #141414;
                                        letter-spacing: 2px;
                                        text-transform: uppercase;
                                        line-height: 28px;
                                    "
                                >
                                    <span style="color: #9c844a">TRIVEX</span>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        font-family: Arial, sans-serif;
                                        font-size: 10px;
                                        color: #9c844a;
                                        letter-spacing: 1px;
                                        text-transform: uppercase;
                                        padding-top: 5px;
                                        line-height: 12px;
                                    "
                                >
                                    SECURITY INTERNATIONAL
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 30px 5% 10px 5%">
                        <h2
                            style="
                                color: #141414;
                                font-size: 20px;
                                margin: 0;
                                font-weight: normal;
                                font-family: Arial, sans-serif;
                            "
                        >
                            New Quote Request
                        </h2>
                        <p
                            style="
                                font-size: 14px;
                                color: #666666;
                                line-height: 1.6;
                                font-family: Arial, sans-serif;
                                margin-top: 10px;
                            "
                        >
                            A potential client has submitted a quote request via
                            the website. Details are provided below:
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 0 5% 40px 5%">
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="
                                background-color: #fcfbf7;
                                border: 1px solid #f1ece1;
                                table-layout: fixed;
                            "
                        >
                            <tr>
                                <td
                                    width="40%"
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                        vertical-align: middle;
                                    "
                                >
                                    Full Name
                                </td>
                                <td
                                    width="60%"
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                        word-break: break-word;
                                    "
                                >
                                    {{ $request->name }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                    "
                                >
                                    Email
                                </td>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                        word-break: break-word;
                                    "
                                >
                                    {{ $request->email }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                    "
                                >
                                    Phone
                                </td>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                    "
                                >
                                    {{ $request->phone }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                    "
                                >
                                    Location
                                </td>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                    "
                                >
                                    {{ $request->location }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                    "
                                >
                                    Headcount
                                </td>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                    "
                                >
                                    {{ $request->headcount }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                    "
                                >
                                    Service
                                </td>
                                <td
                                    style="
                                        padding: 12px;
                                        border-bottom: 1px solid #f1ece1;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                    "
                                >
                                    {{ $request->service_interest }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    valign="top"
                                    style="
                                        padding: 12px;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        font-weight: bold;
                                        color: #9c844a;
                                        text-transform: uppercase;
                                    "
                                >
                                    Requirements
                                </td>
                                <td
                                    style="
                                        padding: 12px;
                                        font-family: Arial, sans-serif;
                                        font-size: 14px;
                                        color: #141414;
                                        line-height: 1.5;
                                        word-break: break-word;
                                    "
                                >
                                    {{ $request->special_requirements }}
                                </td>
                            </tr>
                        </table>

                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="margin-top: 30px"
                        >
                            <tr>
                                <td align="center">
                                    <a
                                        href="mailto:{{ $request->email }}"
                                        style="
                                            background-color: #f7d07a;
                                            color: #141414;
                                            padding: 15px 10%;
                                            text-decoration: none;
                                            font-family: Arial, sans-serif;
                                            font-size: 14px;
                                            font-weight: bold;
                                            text-transform: uppercase;
                                            border-radius: 4px;
                                            display: inline-block;
                                        "
                                    >
                                        Reply to Inquiry
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td
                        bgcolor="#141414"
                        style="padding: 30px 5%; text-align: center"
                    >
                        <p
                            style="
                                color: #f7d07a;
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                margin: 0;
                                text-transform: uppercase;
                                letter-spacing: 1px;
                            "
                        >
                            Trivex Security International
                        </p>
                        <p
                            style="
                                color: #888888;
                                font-family: Arial, sans-serif;
                                font-size: 11px;
                                margin: 10px 0 0 0;
                                line-height: 1.5;
                            "
                        >
                            5 Union Street, Ardwick, Manchester, M12 4JD
                            <br />
                            info
                            @tri-vex.com
                            | +44 0161 260 1985
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
