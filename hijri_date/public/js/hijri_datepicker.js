import './lib/hijri-air-datepicker/dist/js/hijri-datepicker.js';
import moment from './lib/hijri-air-datepicker/dist/js/moment-hijri.js';
frappe.provide("frappe.ui");

frappe.ui.form.ControlDate = class HijriDate extends frappe.ui.form.ControlDate{
    set_datepicker() {
        if(this.df.options == "Hijri"){
            $(this.$input).h_datepicker(this.datepicker_options)
            this.datepicker = this.$input.data("h_datepicker");

            this.datepicker.$datepicker.find('[data-action="today"]').click(() => {
                this.datepicker.selectDate(moment(this.get_now_date()));
            });
        }else{
            this.$input.datepicker(this.datepicker_options);
            this.datepicker = this.$input.data("datepicker");
            // today button didn't work as expected,
            // so explicitly bind the event
            this.datepicker.$datepicker.find('[data-action="today"]').click(() => {
                this.datepicker.selectDate(this.get_now_date());
            });
        }
	}
}

frappe.ui.form.ControlDateRange = class HijriDateRange extends frappe.ui.form.ControlDateRange{
    set_datepicker() {   
        if(this.df.options == "Hijri"){
            $(this.$input).h_datepicker(this.datepicker_options)
            this.datepicker = this.$input.data("h_datepicker");
        }else{
            this.$input.datepicker(this.datepicker_options);
		    this.datepicker = this.$input.data("datepicker");
        }
	}
    
}