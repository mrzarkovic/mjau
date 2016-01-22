/**
 * Created by Milos Zarkovic (mzarkovicm@gmail.com) on 21-Jan-16.
 */
function Table() {
    /**
     * Add new column
     */
    this.addCol = function() {
        var controlsCol = $("[data-role='controls-col']").last();
        var cloneCol = $("[data-role='col']").last().clone(true).html("");
        var cloneInput = $("[data-role='input-template']").clone().attr("data-role", "input").removeClass("template");
        var nextID = Number(cloneCol.attr("data-id")) + 1;
        cloneCol.attr("data-id", nextID);
        cloneInput.appendTo(cloneCol);
        cloneCol.insertBefore(controlsCol);
        // Add result column
        var resultHolder = $("[data-role='disabled-input-template']").clone().attr("data-role", "disabled-input").removeClass("template");
        var resultCol = $("[data-role='col-template']").clone().html("").attr("data-role", "result-col").removeClass("template").attr("data-id", nextID);
        resultHolder.appendTo(resultCol);
        resultCol.appendTo($("[data-role='results']"));
    };
    /**
     * Save the row
     */
    this.saveRow = function(e) {
        // Check for editing
        var parentRow = $(e).parents("[data-role='row']");

        if (parentRow.attr("data-status") == "editing") {
            parentRow.attr("data-status", "inactive");
            parentRow.toggleClass("active");
        } else {
            this.addRow();
        }
        // Disable input fields
        var children = parentRow.children("[data-role='col']");
        $.each(children, function(i, child){
            var disabeledInput = $("[data-role='disabled-input-template']").clone().attr("data-role", "disabled-input").removeClass("template");
            var input = $(child).children();
            var val = input.val();
            $(input).remove();
            $(disabeledInput).html(val);
            $(disabeledInput).appendTo($(child));
        });
    };
    /**
     * Add new row
     */
    this.addRow = function() {
        var activeRow = $("[data-role='row'][data-status='active']").last();
        var oldID = Number(activeRow.attr("data-id"));
        var newID = oldID + 1;
        var newRow = activeRow.clone(true).insertBefore("[data-role='results']");
        var newInputs = newRow.find("[data-role='input']");
        $.each(newInputs, function(i, child){
            $(child).val("");
        });
        newRow.attr("data-id", newID);
        activeRow.attr("data-status", "inactive");
        activeRow.toggleClass("active");
    };
    /**
     * Add new row
     */
    this.editRow = function(e) {
        var parentRow = $(e).parents("[data-role='row']");
        var rowID = parentRow.attr("data-id");
        var editingRow = $("[data-role='row'][data-id='" + rowID + "']");
        editingRow.toggleClass("active");
        editingRow.attr("data-status", "editing");
        // Enable input fields
        var children = parentRow.find("[data-role='col']");
        $.each(children, function(i, child){
            var inputTemplate = $("[data-role='input-template']").clone().attr("data-role", "input").removeClass("template");
            var val = $(child).children("[data-role='disabled-input']").html();
            $(child).html($(inputTemplate).val(val));
        });
    };
    /**
     * Watch for changes in the fields
     */
    this.watchForChanges = function() {
        var _this = this;
        var fields = $("[data-role='col']");
        $.each(fields, function(i, field) {
            $(field).change(function(e){
                _this.calculateCol($(this).attr("data-id"));
            });
        });
    };
    /**
     * Calculate total score in one column
     * @param int id ID of the column
     */
    this.calculateCol = function(id) {
        var cols = $("[data-role='col'][data-id='" + id + "']");
        var total = 0;

        $.each(cols, function(i, col){
            var colParentStatus = $(col).parent().attr("data-status");
            if(colParentStatus == "inactive") {
                var num = Number($(col).children("[data-role='disabled-input']").html());
            } else {
                var num = Number($(col).children("[data-role='input']").val());
            }
            total = total + num;
        });
        // Write results
        var resultsHolder = $("[data-role='results']");
        var resultCol = resultsHolder.children("[data-role='result-col'][data-id='" + id + "']");
        var resultInput = resultCol.children("[data-role='disabled-input']");
        $(resultInput).html(total);
    }
}