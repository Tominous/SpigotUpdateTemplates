const templateHTML =
    `<style type="text/css">
                .updateTemplateTable {
                    font-family: "Droid Sans", Arial, sans-serif;
                    font-size: 12px;
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: fixed;
                    margin-bottom: 8px;
                }
    
                .updateTemplateTable th {
                    background-image: linear-gradient(#f4a03c, #f38918);
                    color: #FFFFFF;
                    font-weight: bold;
                    font-size: 16px;
                    border: 1px solid #dddddd;
                    text-align: center;
                    height: 30px;
                }
    
                .updateTemplateTable td {
                    border: 1px solid #dddddd;
                    padding: 8px;
                    vertical-align: text-top;
                }
                
                #editTemplatesList, #resourceTemplatesList, #templateNameInput, #templateSaveButton, #templateSelectButton {
                    width: 100%;
                }
                
                #templateNameInput {
                    width: 97%;
                }
                
                #templateLoadButton, #templateUpdateButton, #templateDeleteButton {
                    width: 31%;
                }
            </style>
            <table class="updateTemplateTable">
            <tr>
                <th>
                    <p>Save New</p>
                </th>
                <th>
                    <p>Load/Edit</p>
                </th>
                <th>
                    <p>This Resource</p>
                </th>
            </tr>
            <tr>
                <td>
                    <p>Save a new template. The content is the currently written update message.</p><br>
                    <form>
                        <input id="templateNameInput" type="text" name="templateName" placeholder="Template name"><br><br>
                        <input id="templateSaveButton" type="button" value="Save" title="Save the content below as a new template">
                    </form>
                </td>
                <td>
                    <p>Load, update, or delete one of your stored templates.</p><br>
                    <form>
                        Templates:<br>
                        <select id="editTemplatesList" name="Templates">
                        </select>
                        <br><br>
                        <input id="templateLoadButton" type="button" value="Load" title="Load the selected template">
                        <input id="templateUpdateButton" type="button" value="Update" title="Update the selected template to the content below">
                        <input id="templateDeleteButton" type="button" value="Delete" title="Delete the template and all selection defaults of it">
                    </form>
                </td>
                <td>
                    <p>Select a template as the project/resource default.</p><br>
                    <form>
                        Selected:<br>
                        <select id="resourceTemplatesList" name="Templates">
                            <option value="None">None</option>
                        </select>
                        <br><br>
                        <input id="templateSelectButton" type="button" value="Select" title="Select the template to be loaded automatically on page load">
                    </form>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <p id="templateActionResponse"></p>
                </td>
            </tr>
        </table>`;