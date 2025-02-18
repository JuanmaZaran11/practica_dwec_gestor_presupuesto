import * as ges from "./gestionPresupuesto.js";
import * as gesPW from "./gestionPresupuestoWeb.js";

ges.actualizarPresupuesto(1500);

gesPW.mostrarDatoEnId(ges.mostrarPresupuesto(),"presupuesto");

let gasto1 = new ges.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = new ges.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = new ges.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = new ges.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = new ges.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = new ges.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

ges.anyadirGasto(gasto1);
ges.anyadirGasto(gasto2);
ges.anyadirGasto(gasto3);
ges.anyadirGasto(gasto4);
ges.anyadirGasto(gasto5);
ges.anyadirGasto(gasto6);

gesPW.mostrarDatoEnId(ges.calcularTotalGastos(),"gastos-totales");
gesPW.mostrarDatoEnId(ges.calcularBalance(),"balance-total");

for(let gasto of ges.listarGastos()){
    gesPW.mostrarGastoWeb("listado-gastos-completo", gasto);
}

for(let gasto of ges.filtrarGastos({fechaDesde: "2021-09-01" , fechaHasta: "2021-09-30"})){
    gesPW.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
}

for(let gasto of ges.filtrarGastos({valorMinimo: 50})){
    gesPW.mostrarGastoWeb("listado-gastos-filtrado-2", gasto);
}

for(let gasto of ges.filtrarGastos({valorMinimo: 200, etiquetasTiene:["seguros"]})){
    gesPW.mostrarGastoWeb("listado-gastos-filtrado-3", gasto);
}


for(let gasto of ges.filtrarGastos({valorMaximo: 50, etiquetasTiene:["comida", "transporte"]})){
    gesPW.mostrarGastoWeb("listado-gastos-filtrado-4", gasto);
}

//Mostrar el total de gastos agrupados por día en div#agrupacion-dia (funciones agruparGastos y mostrarGastosAgrupadosWeb)
gesPW.mostrarGastosAgrupadosWeb("agrupacion-dia",ges.agruparGastos("dia"),"día");

//Mostrar el total de gastos agrupados por mes en div#agrupacion-mes (funciones agruparGastos y mostrarGastosAgrupadosWeb)
gesPW.mostrarGastosAgrupadosWeb("agrupacion-mes",ges.agruparGastos("mes"),"mes");

//Mostrar el total de gastos agrupados por año en div#agrupacion-anyo (funciones agruparGastos y mostrarGastosAgrupadosWeb)
gesPW.mostrarGastosAgrupadosWeb("agrupacion-anyo",ges.agruparGastos("anyo"),"año");
