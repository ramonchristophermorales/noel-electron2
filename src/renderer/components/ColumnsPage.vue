<template>

    <div class="container-fluid">
      <main>
          <table class="table table-hover" id="table-columns">
          	<thead>
          		<tr>
          			<th>test</th>
          		</tr>
          	</thead>
          	<tbody>
          		<tr>
          			<td>test</td>
          		</tr>
          	</tbody>
          </table>
      </main>
    </div>

</template>

<script>

    import $ from 'jquery'
    require('datatables.net-bs')(window, $)
    let RcmEloquent = require('../assets/RcmEloquent.js')
    let eloquent = new RcmEloquent()

    console.log(eloquent.testing())

export default {
      mounted () {
        $('#table-columns').DataTable()
      }
    }

</script>

<style>

</style>
