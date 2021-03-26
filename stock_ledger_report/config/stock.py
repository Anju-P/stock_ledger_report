from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
            "label": _("Stock Reports"),
			"items": [
				{
					"type": "report",
					"name": "Stock Ledger Report",
					"doctype": "Stock Ledger Entry",
					"is_query_report": True
				},
				
            ]
		}
	] 