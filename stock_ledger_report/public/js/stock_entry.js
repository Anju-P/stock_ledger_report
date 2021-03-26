frappe.ui.form.on('Stock Entry', {
   
    on_submit: function (frm, cdt, cdn) {
        $.each(frm.doc.items || [], function (i, s) {
        frappe.call({
            method:"stock_ledger_report.stock_ledger_report.doctype.stock_entry.update_vendor",
            args: {
              
                    'vendor':s.vendor,
                    'item_code': s.item_code,
                    'voucher_no':frm.doc.name
            },
            callback: function (r) {
alert("Success")
            }
        })
    })
}

})