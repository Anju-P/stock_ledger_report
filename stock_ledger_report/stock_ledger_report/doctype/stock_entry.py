


from __future__ import unicode_literals
import frappe

from frappe.model.document import Document
from frappe.utils import add_days, cint, cstr, flt, getdate, rounded, date_diff, money_in_words
class StockLedgerReport(Document):
	pass

@frappe.whitelist()
def update_vendor(vendor,item_code,voucher_no):
        #completed_qty=doc.completed_qty+doc.qty
        frappe.db.sql("""update `tabStock Ledger Entry` set vendor =%s where item_code=%s and voucher_no=%s""",(vendor,item_code,voucher_no))
        return