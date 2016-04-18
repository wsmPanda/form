<table>
<tr>
<td>UserName</td>
<td>Name</td>
<td>Email</td>
</tr>
{ "dsadsadsa" }
{{#if users}}
{{#each users}}
<tr>
<td>{{username}}</td>
<td>{{firstname}}-{{lastname}}</td>
<td>{{email}}</td>
</tr>
{{/each}}
{{else}}
<tr>
<td colspan="3">数据？？？</td>
</tr>
{{/if}}
</table>