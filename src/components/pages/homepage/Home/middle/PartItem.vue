<template>
<div>
    <TABLE id="part-item" cellspacing="0" cellpadding="0" width="1100" border="0" style="margin: 15px 0px 18px">
        <TD valign="top">
            <TABLE cellspacing="0" cellpadding="0" border="0">
        <TBODY>
        <TR>
      <slot></slot>
        </TR>
        </TBODY>
            </TABLE>
        </TD>
    </TABLE>
</div>
</template>

<script>
    export default {
        name: "PartItem"
    }
</script>

<style scoped>
    #part-item{
        font-size: 14px;
    }
</style>