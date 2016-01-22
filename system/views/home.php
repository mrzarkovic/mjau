<section class="main content">
	<input type="button" onclick="table.addCol();" value="Add player">
	<div class="clearfix">
		<table id="table" class="mjaumjau-table">
			<tbody>
				<!-- Row -->
				<tr data-role="row" data-status="active" data-id="1" class="active">
					<!-- Input -->
					<td data-role="col" data-id="1">
						<input type="number" value="" data-role="input">
					</td>
					<!-- Controls -->
					<td data-role="controls-col" class="controls">
						<input type="button" value="Save" onclick="table.saveRow(this)" class="finish-control">
						<input type="button" value="Edit" onclick="table.editRow(this)" class="edit-control">
					</td>
				</tr>
				<!-- Results -->
				<tr data-role="results">
					<td data-role="result-col" data-id="1">
						<div data-role="disabled-input" class=""></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
<table class="template">
	<tr data-role="row-template" data-status="" data-id="" class="template">
		<td data-role="col-template" data-id="" class="template">
			<input type="number" value="" data-role="input-template" class="template">
			<div data-role="disabled-input-template" class="template"></div>
		</td>
		<td data-role="controls-col-template" class="controls" class="template">
			<input type="button" value="Finish" onclick="table.saveRow(this)" class="finish-control">
			<input type="button" value="Edit" onclick="table.editRow(this)" class="edit-control">
		</td>
	</tr>
</table>
<script src="/js/table.js"></script>
<script>
	var table = new Table();
	table.watchForChanges();
</script>
