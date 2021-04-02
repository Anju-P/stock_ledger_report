


from __future__ import unicode_literals
import frappe

from frappe.model.document import Document
from frappe.utils import add_days, cint, cstr, flt, getdate, rounded, date_diff, money_in_words
class StockLedgerReport(Document):
	pass

@frappe.whitelist()
def update_vendor(vendor,item_code,color,shape,model_no,voucher_no,watt,current,brand):
        #completed_qty=doc.completed_qty+doc.qty
        frappe.db.sql("""update `tabStock Ledger Entry` set vendor =%s where item_code=%s and voucher_no=%s""",(vendor,item_code,voucher_no))
        frappe.db.sql("""update `tabStock Ledger Entry` set color =%s where item_code=%s and voucher_no=%s""",(color,item_code,voucher_no))
        frappe.db.sql("""update `tabStock Ledger Entry` set shape =%s where item_code=%s and voucher_no=%s""",(shape,item_code,voucher_no))
        frappe.db.sql("""update `tabStock Ledger Entry` set model_no =%s where item_code=%s and voucher_no=%s""",(model_no,item_code,voucher_no))
        frappe.db.sql("""update `tabStock Ledger Entry` set watt =%s where item_code=%s and voucher_no=%s""",(watt,item_code,voucher_no))
        frappe.db.sql("""update `tabStock Ledger Entry` set current =%s where item_code=%s and voucher_no=%s""",(current,item_code,voucher_no))
        frappe.db.sql("""update `tabStock Ledger Entry` set brand =%s where item_code=%s and voucher_no=%s""",(brand,item_code,voucher_no))
        return