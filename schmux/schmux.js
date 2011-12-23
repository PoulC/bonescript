
var gpio0 = 0;
var gpio1 = gpio0+32;
var gpio2 = gpio1+32;
var gpio3 = gpio2+32;

bone = 
{
    P8_1: { name: "DGND" },
    P8_2: { name: "DGND" },
    P8_3: { name: "GPIO1_6", gpio: gpio1+6, mux: "gpmc_ad6" },
    P8_4: { name: "GPIO1_7", gpio: gpio1+7, mux: "gpmc_ad7" },
    P8_5: { name: "GPIO1_2", gpio: gpio1+2, mux: "gpmc_ad2" },
    P8_6: { name: "GPIO1_3", gpio: gpio1+3, mux: "gpmc_ad3" },
    P8_7: { name: "TIMER4", gpio: gpio2+2, mux: "gpmc_advn_ale" },
    P8_8: { name: "TIMER7", gpio: gpio2+3, mux: "gpmc_oen_ren" },
    P8_9: { name: "TIMER5", gpio: gpio2+5, mux: "gpmc_ben0_cle" },
    P8_10: { name: "TIMER6", gpio: gpio2+4, mux: "gpmc_wen" },
    P8_11: { name: "GPIO1_13", gpio: gpio1+13, mux: "gpmc_ad13" },
    P8_12: { name: "GPIO1_12", gpio: gpio1+12, mux: "gpmc_ad12" },
    P8_13: { name: "EHRPWM2B", gpio: gpio0+23, mux: "gpmc_ad9" },
    P8_14: { name: "GPIO0_26", gpio: gpio0+26, mux: "gpmc_ad10" },
    P8_15: { name: "GPIO1_15", gpio: gpio1+15, mux: "gpmc_ad15" },
    P8_16: { name: "GPIO1_14", gpio: gpio1+14, mux: "gpmc_ad14" },
    P8_17: { name: "GPIO0_27", gpio: gpio0+27, mux: "gpmc_ad11" },
    P8_18: { name: "GPIO2_1", gpio: gpio2+1, mux: "gpmc_clk" },
    P8_19: { name: "EHRPWM2A", gpio: gpio0+22, mux: "gpmc_ad8" },
    P8_20: { name: "GPIO1_31", gpio: gpio1+31, mux: "gpmc_csn2" },
    P8_21: { name: "GPIO1_30", gpio: gpio1+30, mux: "gpmc_csn1" },
    P8_22: { name: "GPIO1_5", gpio: gpio1+5, mux: "gpmc_ad5" },
    P8_23: { name: "GPIO1_4", gpio: gpio1+4, mux: "gpmc_ad4" },
    P8_24: { name: "GPIO1_1", gpio: gpio1+1, mux: "gpmc_ad1" },
    P8_25: { name: "GPIO1_0", gpio: gpio1+0, mux: "gpmc_ad0" },
    P8_26: { name: "GPIO1_29", gpio: gpio1+29, mux: "gpmc_csn0" },
    P8_27: { name: "GPIO2_22", gpio: gpio2+22, mux: "lcd_vsync" },
    P8_28: { name: "GPIO2_24", gpio: gpio2+24, mux: "lcd_pclk" },
    P8_29: { name: "GPIO2_23", gpio: gpio2+23, mux: "lcd_hclk" },
    P8_30: { name: "GPIO2_25", gpio: gpio2+25, mux: "lcd_ac_bias_en" },
    P8_31: { name: "UART5_CTSN", gpio: gpio0+10, mux: "lcd_data14" },
    P8_32: { name: "UART5_RTSN", gpio: gpio0+11, mux: "lcd_data15" },
    P8_33: { name: "UART4_RTSN", gpio: gpio0+9, mux: "lcd_data13" },
    P8_34: { name: "UART3_RTSN", gpio: gpio2+17, mux: "lcd_data11" },
    P8_35: { name: "UART4_CTSN", gpio: gpio0+8, mux: "lcd_data12" },
    P8_36: { name: "UART3_CTSN", gpio: gpio2+16, mux: "lcd_data10" },
    P8_37: { name: "UART5_TXD", gpio: gpio2+14, mux: "lcd_data8" },
    P8_38: { name: "UART5_RXD", gpio: gpio2+15, mux: "lcd_data9" },
    P8_39: { name: "GPIO2_12", gpio: gpio2+12, mux: "lcd_data6" },
    P8_40: { name: "GPIO2_13", gpio: gpio2+13, mux: "lcd_data7" },
    P8_41: { name: "GPIO2_10", gpio: gpio2+10, mux: "lcd_data4" },
    P8_42: { name: "GPIO2_11", gpio: gpio2+11, mux: "lcd_data5" },
    P8_43: { name: "GPIO2_8", gpio: gpio2+8, mux: "lcd_data2" },
    P8_44: { name: "GPIO2_9", gpio: gpio2+9, mux: "lcd_data3" },
    P8_45: { name: "GPIO2_6", gpio: gpio2+6, mux: "lcd_data0" },
    P8_46: { name: "GPIO2_7", gpio: gpio2+7, mux: "lcd_data1" },
    P9_1: { name: "DGND" },
    P9_2: { name: "DGND" },
    P9_3: { name: "VDD_3V3" },
    P9_4: { name: "VDD_3V3" },
    P9_5: { name: "VDD_5V" },
    P9_6: { name: "VDD_5V" },
    P9_7: { name: "SYS_5V" },
    P9_8: { name: "SYS_5V" },
    P9_9: { name: "PWR_BUT" },
    P9_10: { name: "SYS_RESETn" },
    P9_11: { name: "UART4_RXD", gpio: gpio0+30, mux: "gpmc_wait0" },
    P9_12: { name: "GPIO1_28", gpio: gpio1+28, mux: "gpmc_ben1" },
    P9_13: { name: "UART4_TXD", gpio: gpio0+31, mux: "gpmc_wpn" },
    P9_14: { name: "EHRPWM1A", gpio: gpio1+18, mux: "gpmc_a2" },
    P9_15: { name: "UART3_RXD", gpio: gpio2+18, mux: "mii1_rxd3" },
    P9_16: { name: "EHRPWM1B", gpio: gpio1+19, mux: "gpmc_a3" },
    P9_17: { name: "I2C1_SCL", gpio: gpio0+5, mux: "spi0_cs0" },
    P9_18: { name: "I2C1_SDA", gpio: gpio0+4, mux: "spi0_d1" },
    P9_19: { name: "I2C2_SCL", gpio: gpio0+13, mux: "uart1_rtsn" },
    P9_20: { name: "I2C2_SDA", gpio: gpio0+12, mux: "uart1_ctsn" },
    P9_21: { name: "UART2_TXD", gpio: gpio0+3, mux: "spi0_d0" },
    P9_22: { name: "UART2_RXD", gpio: gpio0+2, mux: "spi0_sclk" },
    P9_23: { name: "UART3_TXD", gpio: gpio0+7, mux: "ecap0_in_pwm0_out" },
    P9_24: { name: "UART1_TXD", gpio: gpio0+15, mux: "uart1_txd" },
    P9_25: { name: "GPIO3_21", gpio: gpio3+21, mux: "mcasp0_ahclkx" },
    P9_26: { name: "UART1_RXD", gpio: gpio0+14, mux: "uart1_rxd" },
    P9_27: { name: "GPIO3_19", gpio: gpio3+19, mux: "mcasp0_fsr" },
    P9_28: { name: "SPI1_CS0", gpio: gpio3+17, mux: "mcasp0_ahclkr" },
    P9_29: { name: "SPI1_D0", gpio: gpio3+15, mux: "mcasp0_fsx" },
    P9_30: { name: "SPI1_D1", gpio: gpio3+16, mux: "mcasp0_axr0" },
    P9_31: { name: "SPI1_SCLK", gpio: gpio3+14, mux: "mcasp0_aclkx" },
    P9_32: { name: "VDD_ADC" },
    P9_33: { name: "AIN4" },
    P9_34: { name: "GNDA_ADC" },
    P9_35: { name: "AIN6" },
    P9_36: { name: "AIN5" },
    P9_37: { name: "AIN2" },
    P9_38: { name: "AIN3" },
    P9_39: { name: "AIN0" },
    P9_40: { name: "AIN1" },
    P9_41: { name: "CLKOUT2", gpio: gpio0+20, mux: "xdma_event_intr1" },
    P9_42: { name: "ID_1" },
    P9_43: { name: "ID_0" },
    P9_44: { name: "ID_2" },
    P9_45: { name: "DGND" },
    P9_46: { name: "DGND" },
    USR0: { name: "USR0", gpio: gpio1+21, led: "usr0", mux: "gpmc_a5" },
    USR1: { name: "USR1", gpio: gpio1+22, led: "usr1", mux: "gpmc_a6" },
    USR2: { name: "USR2", gpio: gpio1+23, led: "usr2", mux: "gpmc_a7" },
    USR3: { name: "USR3", gpio: gpio1+24, led: "usr3", mux: "gpmc_a8" }
};

function printPin(pinname) {
    $("#" + pinname).css("background-color", "#000000");
    $("#" + pinname + "_name").html(bone[pinname].name);
}

function clearPin(pinname) {
    $("#" + pinname).css("background-color", "#EAF2D3");
    $("#" + pinname + "_name").html("");
}


$(document).ready(function() {

$("#i2c1").hover(
    function () {
		printPin("P9_17");
        printPin("P9_18");
	},
	function () {
        clearPin("P9_17");
        clearPin("P9_18");
	});	

$("#i2c2").hover(
    function () {
    	printPin("P9_19");
        printPin("P9_20");
	},
	function () {
        clearPin("P9_19");
        clearPin("P9_20");
	});	
    
$("#spi1").hover(
    function () {
        printPin("P9_28");
        printPin("P9_29");
        printPin("P9_30");
	},
	function () {
        clearPin("P9_28");
        clearPin("P9_29");
        clearPin("P9_30");
	});

})