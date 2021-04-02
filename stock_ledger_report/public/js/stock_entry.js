frappe.ui.form.on('Stock Entry', {
    reload:function(frm,cdt,cdn)
    {
alert("hai")
    },
    on_submit: function (frm, cdt, cdn) {
        $.each(frm.doc.items || [], function (i, s) {
           
        frappe.call({
            method:"stock_ledger_report.stock_ledger_report.doctype.stock_entry.update_vendor",
            args: {
              
                    'vendor':s.vendor,
                    'item_code': s.item_code,
                    'color':s.color,
                    'shape':s.shape,
                    'model_no':s.model_no,
                    'voucher_no':frm.doc.name,
                    'watt':s.watt,
                    'current':s.current,
                    'brand':s.brand
            },
            callback: function (r) {
               
            }
        })
    })
}

})