<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="background-color: #f9f4e8; margin: 0; padding: 0"
>
    <tr>
        <td align="center" style="padding: 20px 10px">
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                    max-width: 600px;
                    background-color: #ffffff;
                    border: 1px solid #e0d9cc;
                    border-radius: 4px;
                "
            >
                <tr>
                    <td align="center" style="padding: 30px 20px">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        font-family: Arial, sans-serif;
                                        font-size: 26px;
                                        font-weight: bold;
                                        color: #141414;
                                        letter-spacing: 3px;
                                        text-transform: uppercase;
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
                                        letter-spacing: 2px;
                                        text-transform: uppercase;
                                        padding-top: 5px;
                                    "
                                >
                                    SECURITY INTERNATIONAL
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td
                        align="center"
                        bgcolor="#141414"
                        style="padding: 40px 30px"
                    >
                        <h1
                            style="
                                color: #f7d07a;
                                font-family: Arial, sans-serif;
                                font-size: 24px;
                                margin: 0;
                                text-transform: uppercase;
                                letter-spacing: 1px;
                            "
                        >
                            {{ $title }}
                        </h1>
                        <p
                            style="
                                color: #ffffff;
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                margin: 15px 0 0 0;
                                line-height: 1.5;
                            "
                        >
                            {{ $subtitle }}
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 40px 5% 20px 5%">
                        <h2
                            style="
                                color: #141414;
                                font-family: Arial, sans-serif;
                                font-size: 20px;
                                margin: 0 0 15px 0;
                            "
                        >
                            Dear Subscriber,
                        </h2>
                        <p
                            style="
                                color: #444444;
                                font-family: Arial, sans-serif;
                                font-size: 15px;
                                line-height: 1.7;
                                margin: 0 0 20px 0;
                            "
                        >
                            {{ $mainMessage }}
                        </p>

                        @if (isset($tip))
                            <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                    background-color: #fcfbf7;
                                    border-left: 4px solid #f7d07a;
                                    margin-bottom: 25px;
                                "
                            >
                                <tr>
                                    <td style="padding: 20px">
                                        <h3
                                            style="
                                                color: #9c844a;
                                                font-family: Arial, sans-serif;
                                                font-size: 16px;
                                                margin: 0 0 10px 0;
                                                text-transform: uppercase;
                                            "
                                        >
                                            Tip
                                        </h3>
                                        <p
                                            style="
                                                color: #666666;
                                                font-family: Arial, sans-serif;
                                                font-size: 14px;
                                                line-height: 1.5;
                                                margin: 0;
                                            "
                                        >
                                            {{ $tip }}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        @endif
                    </td>
                </tr>

                <tr>
                    <td align="center" style="padding: 0 5% 40px 5%">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td
                                    align="center"
                                    bgcolor="#f7d07a"
                                    style="border-radius: 4px"
                                >
                                    <a
                                        href="{{ config("app.url") }}"
                                        target="_blank"
                                        style="
                                            padding: 15px 40px;
                                            font-family: Arial, sans-serif;
                                            font-size: 14px;
                                            color: #141414;
                                            font-weight: bold;
                                            text-decoration: none;
                                            text-transform: uppercase;
                                            display: inline-block;
                                        "
                                    >
                                        Visit Our Website
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td
                        bgcolor="#141414"
                        style="padding: 40px 5%; text-align: center"
                    >
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                        >
                            <tr>
                                <td align="center" style="padding-bottom: 20px">
                                    <p
                                        style="
                                            color: #f7d07a;
                                            font-family: Arial, sans-serif;
                                            font-size: 12px;
                                            margin: 0;
                                            text-transform: uppercase;
                                            letter-spacing: 2px;
                                        "
                                    >
                                        Trivex Security International
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        color: #888888;
                                        font-family: Arial, sans-serif;
                                        font-size: 11px;
                                        line-height: 1.6;
                                    "
                                >
                                    {{ $contactAddress }}
                                    <br />
                                    <a
                                        href="mailto:{{ $contactEmail }}"
                                        style="
                                            color: #888888;
                                            text-decoration: underline;
                                        "
                                    >
                                        {{ $contactEmail }}
                                    </a>
                                    | {{ $contactPhone }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        padding-top: 25px;
                                        border-top: 1px solid #333333;
                                    "
                                >
                                    <p
                                        style="
                                            color: #666666;
                                            font-family: Arial, sans-serif;
                                            font-size: 10px;
                                            margin: 0;
                                        "
                                    >
                                        You received this email because you
                                        subscribed to the Trivex Newsletter.
                                        <br />
                                        <a
                                            href="{{ route("landing.newsletter.unsubscribe") }}?token={{ $token }}"
                                            style="
                                                color: #f7d07a;
                                                text-decoration: none;
                                            "
                                        >
                                            Unsubscribe here
                                        </a>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
