<section class="main content">
	<input type="button" onclick="table.addPlayer();" value="Dodaj igrača" class="add-player">
	<div class="clearfix">
		<table id="table" class="mraumrau-table">
			<thead data-role="table-head">
				<!-- Players names holder -->
			</thead>
			<tbody data-role="table-body">
				<!-- Results per game -->
			</tbody>
			<tfoot data-role="table-foot">
				<!-- Sum of results -->
			</tfoot>
		</table>
	</div>
</section>
<table class="template">
	<tr data-role="players-row-template" class="template">
		<th data-role="player-col-template" data-id="" class="player template">
			<input data-role="input-text-template" type="text" value="" placeholder="Ime igrača" class="template">
		</th>
	</tr>
	<tr data-role="game-row-template" data-status="" data-id="" class="template">
		<td data-role="game-col-template" data-id="" class="template">
			<input data-role="input-number-template" type="number" value="" placeholder="0" class="template">
			<div data-role="disabled-input-template" class="disabled-input template"></div>
		</td>
		<td data-role="controls-col-template" class="controls template">
			<input type="button" value="Sačuvaj" onclick="table.saveRow(this)" class="finish-control button">
			<input type="button" value="Izmeni" onclick="table.editRow(this)" class="edit-control button">
		</td>
	</tr>
	<tr data-role="results-template" class="template">
		<td data-role="result-col-template" data-id="" class="result template"></td>
	</tr>
</table>
<script>
	var table = new Table("table");
	table.initialize();
	table.watchForChanges();
</script>
