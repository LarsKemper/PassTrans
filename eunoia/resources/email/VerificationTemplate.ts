export const VerificationTemplate = (
  status: string | number,
  accessId: string
): string => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title></title>
      <style type="text/css">
        table,
        td {
          color: #000000;
        }
        a {
          color: #161a39;
          text-decoration: underline;
        }
        @media only screen and (min-width: 620px) {
          .u-row {
            width: 600px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }

          .u-row .u-col-50 {
            width: 300px !important;
          }

          .u-row .u-col-100 {
            width: 600px !important;
          }
        }
        @media (max-width: 620px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: calc(100% - 40px) !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        p {
          margin: 0;
        }
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        * {
          line-height: inherit;
        }
        a[x-apple-data-detectors="true"] {
          color: inherit !important;
          text-decoration: none !important;
        }
      </style>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
    </head>
    <body
      class="clean-body u_body"
      style="
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        background-color: #f9f9f9;
        color: #000000;
      "
    >
      <table
        style="
          border-collapse: collapse;
          table-layout: fixed;
          border-spacing: 0;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          vertical-align: top;
          min-width: 320px;
          margin: 0 auto;
          background-color: #f9f9f9;
          width: 100%;
        "
        cellpadding="0"
        cellspacing="0"
      >
        <tbody>
          <tr style="vertical-align: top">
            <td
              style="
                word-break: break-word;
                border-collapse: collapse !important;
                vertical-align: top;
              "
            >
              <div
                class="u-row-container"
                style="padding: 0px; background-color: #f9f9f9"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #f9f9f9;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 15px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 1px solid #f9f9f9;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 25px 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="../assets/logo-dark.svg"
                                          alt="PASSTRANS"
                                          title="PASSTRANS"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 100%;
                                            max-width: 244px;
                                          "
                                          width="244"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #323044;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                  <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 20px 10px 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px 10px 30px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      color: #7a2222;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                      "
                                    >
                                      <span
                                        style="
                                          font-size: 28px;
                                          line-height: 39.2px;
                                          color: #ffffff;
                                          font-family: Lato, sans-serif;
                                        "
                                        >Please verify access to your transfer
                                      </span>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 40px 40px 30px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="font-size: 14px; line-height: 140%">
                                      <span
                                        style="
                                          font-size: 18px;
                                          line-height: 25.2px;
                                          color: #666666;
                                        "
                                        >Hello,</span
                                      >
                                    </p>
                                    <p style="font-size: 14px; line-height: 140%">
                                      &nbsp;
                                    </p>
                                    <p style="font-size: 14px; line-height: 140%">
                                      <span
                                        style="
                                          font-size: 18px;
                                          line-height: 25.2px;
                                          color: #666666;
                                        "
                                        >We are sending you this message because an attempt was made to access the dashboard of your transfer. For security reasons, these access attempts must be verified.</span
                                      >
                                    </p>
                                    <p style="font-size: 14px; line-height: 140%">
                                      &nbsp;
                                    </p>
                                    <p style="font-size: 14px; line-height: 140%">
                                      <span
                                        style="
                                          font-size: 18px;
                                          line-height: 25.2px;
                                          color: #666666;
                                        "
                                        >To verify your transfer use this code: <strong>${status}</strong>
                                      </span>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                        </table>
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 40px 40px 30px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="font-size: 14px; line-height: 140%">
                                      <span
                                        style="
                                          color: #888888;
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        ><em
                                          ><span
                                            style="
                                              font-size: 16px;
                                              line-height: 22.4px;
                                            "
                                            >Please inform us if you have not created this transfer!</span
                                          ></em
                                        ></span
                                      ><br /><span
                                        style="
                                          color: #888888;
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        ><em
                                          ><span
                                            style="
                                              font-size: 16px;
                                              line-height: 22.4px;
                                            "
                                            >&nbsp;</span
                                          ></em
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #323044;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="u-col u-col-50"
                      style="
                        max-width: 320px;
                        min-width: 300px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                      <div
                          style="
                            padding: 20px 20px 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="font-size: 14px; line-height: 140%">
                                      <span
                                        style="
                                          font-size: 16px;
                                          line-height: 22.4px;
                                          color: #ecf0f1;
                                        "
                                        >Contact</span
                                      >
                                    </p>
                                    <p style="font-size: 14px; line-height: 140%">
                                      <span style="color: #ecf0f1"
                                        >mail@lars-kemper.com</span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      class="u-col u-col-50"
                      style="
                        max-width: 320px;
                        min-width: 300px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px 0px 0px 20px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 33px 15px 15px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      line-height: 190%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="line-height: 190%; font-size: 14px">
                                      <span
                                        style="
                                          font-size: 14px;
                                          line-height: 26.6px;
                                        "
                                        ><span
                                          style="
                                            color: #ecf0f1;
                                            font-size: 14px;
                                            line-height: 26.6px;
                                          "
                                          ><span
                                            style="
                                              line-height: 26.6px;
                                              font-size: 14px;
                                            "
                                            >PassTrans &copy;&nbsp; All Rights
                                            Reserved</span
                                          ></span
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="u-row-container"
                style="padding: 0px; background-color: #f9f9f9"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #323044;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 15px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 1px solid #323044;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #f9f9f9;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="width: 100% !important">
                        <div
                          style="
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        >
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px 40px 30px 20px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
    </body>
  </html>`;
};
