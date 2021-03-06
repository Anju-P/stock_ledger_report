// Copyright (c) 2016, Anju Ashin and contributors
// For license information, please see license.txt
/* eslint-disable */



frappe.query_reports["Stock Ledger Report"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"reqd": 1
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"warehouse",
			"label": __("Warehouse"),
			"fieldtype": "Link",
			"options": "Warehouse",
			"get_query": function() {
				const company = frappe.query_report.get_filter_value('company');
				return { 
					filters: { 'company': company }
				}
			}
		},
		{
			"fieldname":"item_code",
			"label": __("Item"),
			"fieldtype": "Link",
			"options": "Item",
			"get_query": function() {
				return {
					query: "erpnext.controllers.queries.item_query"
				}
			}
		},
		{
			"fieldname":"item_group",
			"label": __("Item Group"),
			"fieldtype": "Link",
			"options": "Item Group"
		},
		{
			"fieldname":"batch_no",
			"label": __("Batch No"),
			"fieldtype": "Link",
			"options": "Batch"
		},
		{
			"fieldname":"brand",
			"label": __("Brand"),
			"fieldtype": "Link",
			"options": "Brand"
		},
		{
			"fieldname":"voucher_no",
			"label": __("Voucher #"),
			"fieldtype": "Data"
		},
		{
			"fieldname":"project",
			"label": __("Project"),
			"fieldtype": "Link",
			"options": "Project"
		},
		{
			"fieldname":"include_uom",
			"label": __("Include UOM"),
			"fieldtype": "Link",
			"options": "UOM"
		},
		{
			"fieldname":"vendor",
			"label": __("Vendor"),
			"fieldtype": "Link",
			"options": "Vendor",
			
		},
		{
			"fieldname":"color",
			"label": __("Color"),
			"fieldtype": "Link",
			"options": "Color",
			
		},
		{
			"fieldname":"shape",
			"label": __("Shape"),
			"fieldtype": "Link",
			"options": "Shape",
			
		},
		{
			"fieldname":"model_no",
			"label": __("Model No"),
			"fieldtype": "Link",
			"options": "Model Number",
			
		},
		{
			"fieldname":"watt",
			"label": __("Watt"),
			"fieldtype": "Link",
			"options": "Watt",
			
		},
		{
			"fieldname":"current",
			"label": __("Current"),
			"fieldtype": "Link",
			"options": "Current",
			
		},
	]
}

// $(function() {
// 	$(wrapper).bind("show", function() {
// 		frappe.query_report.load();
// 	});
// });