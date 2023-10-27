import momentTimezone from "moment-timezone/builds/moment-timezone-with-data.js";
window.moment = momentTimezone;
frappe.provide("frappe.ui");
frappe.ui.form.ControlDate = class HijriDate extends frappe.ui.form.ControlDate{
    set_datepicker() {
        if(this.df.options == "Hijri"){
            this.datepicker_options = {
                calendar: $.calendars.instance('islamic', 'ar'),
                dateFormat: "dd-mm-yyyy",
                showOnFocus: true,
                onSelect: (date) => {
                    if (date.length === 0) {
                        return false
                    }
                    var date = $.calendars.instance('islamic', 'ar').formatDate('yyyy-mm-dd', date[0]);
                    this.set_value(date)
                },
            };
            
            $(this.$input).calendarsPicker(this.datepicker_options);

            // $(this.$input).datetimepicker({
            //     datepicker:false,
            //     format:'H:i'
            //   });
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
    // make_input () {
    //     // let { html_element, input_type } = this.constructor;
    //     // console.log("this.html_element = ", html_element);
    //     // var self = this;
    //     // this.$input_extra_date = $("<" + html_element + ">")
    //     //     .attr("type", input_type)
    //     //     .attr("autocomplete", "off")
    //     //     .addClass("input-with-feedback form-control")
    //     //     .prependTo(this.input_area);
    //     super.make_input();
    //     if(this.df.options == "Hijri"){
    //         console.log("this.df.options == ", this.df.options);
    //         $(self.$input).calendarsPicker({
    //             calendar: $.calendars.instance('islamic', 'ar'),
    //             onSelect: convert_to_hijri,
    //             showOnFocus: true,
    //         });
    //     }
    //     function convert_to_hijri(date) {
    //         if (date.length === 0) {
    //             return false
    //         }
    //         var jd = $.calendars.instance('islamic').toJD(parseInt(date[0].year()), parseInt(date[0].month()), parseInt(date[0].day()));
    //         var date = $.calendars.instance('gregorian').fromJD(jd);
    //         var date_value = new Date(parseInt(date.year()), parseInt(date.month()) - 1, parseInt(date.day()));
    //         if (date_value){self.$input.val(self.set_formatted_input(date_value));}
    //     }
    //     // $(self.$input_extra_date).calendarsPicker({
    //     //     calendar: $.calendars.instance('islamic', 'ar'),
    //     //     onSelect: convert_to_hijri,
    //     //     showOnFocus: true,
    //     // });

    //     // $(self.$input_extra_date).hijriDatePicker({
    //     //     hijri:true,
    //     //     viewMode:'months'
    //     // });
    // }

    
    // kuwaiticalendar(value) {
    //     if (value) {
    //         var today = new Date(moment(value).locale('en').format("YYYY-MM-DD"));
    //         var day = today.getDate();
    //         var month = today.getMonth() + 1;
    //         var year = today.getFullYear();
    //         var calendar = $.calendars.instance('gregorian', 'ar');
    //         var hijri_calendar = $.calendars.instance('islamic', 'ar');
    //         var jd = calendar.toJD(year, month, day);
    //         var date = hijri_calendar.fromJD(jd);
    //         var res = hijri_calendar.formatDate('yyyy-mm-dd', date.add(0, 'd'));
    //         return [res, ''];
    //     } else {
    //         return value;
    //     }

    // }
    // set_input(value) {
    //     super.set_input(value);
    //     if (value) {
    //         var h_value = this.kuwaiticalendar(value);
    //         $(this.$input_extra_date).val(h_value[0]);
    //     }

    // }

}