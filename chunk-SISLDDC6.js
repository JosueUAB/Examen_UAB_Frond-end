import{a as X}from"./chunk-MA4VDBPG.js";import{a as Y}from"./chunk-ONWU4JFM.js";import{a as Z,b as ee}from"./chunk-ZHP6V7D4.js";import{a as ie}from"./chunk-MUXAHXIO.js";import"./chunk-QJ4FMHYO.js";import{b as G,c as h,d as A,e as $,l as H,o as L,q as Q,r as O,s as q,t as J,u as K,w as U,x as W}from"./chunk-RB3RUY6Z.js";import{$ as o,Da as T,Ea as E,Fa as _,I as y,Ia as F,N as V,O as b,Ob as k,P as p,Pa as e,Q as S,Qa as x,Ra as P,Sa as D,Ta as M,Xd as z,Za as w,aa as v,hc as N,id as R,jd as j,na as I,ua as f,va as g,wa as C,xa as t,ya as i,yc as B,za as m}from"./chunk-O3ZUDSFI.js";import{f as te}from"./chunk-YIEKTC7C.js";var u=te(ie());function ne(c,d){if(c&1&&(e(0,`
                            `),t(1,"option",27),e(2),i(),e(3,`
                          `)),c&2){let r=d.$implicit;o(),F("value",r.imei),o(),M("",r.marca," ",r.modelo," precio ",r.precio," Bs")}}function ae(c,d){if(c&1&&(e(0,`
                            `),t(1,"option",27),e(2),i(),e(3,`
                          `)),c&2){let r=d.$implicit;o(),F("value",r.CI),o(),M(" CI: ",r.CI," ",r.Nombre," ",r.Apellido,"")}}function re(c,d){if(c&1){let r=T();e(0,`
                    `),t(1,"tr"),e(2,`
                      `),t(3,"th",28),e(4),i(),e(5,`
                      `),t(6,"td"),e(7),i(),e(8,`
                      `),t(9,"td"),e(10),i(),e(11,`
                      `),t(12,"td"),e(13),i(),e(14,`
                      `),t(15,"td"),e(16),i(),e(17,`
                      `),t(18,"td"),e(19),i(),e(20,`
                      `),t(21,"td"),e(22),i(),e(23,`
                      `),t(24,"td"),e(25),i(),e(26,`
                      `),t(27,"td"),e(28),i(),e(29,`
                      `),t(30,"td"),e(31),i(),e(32,`
                      `),t(33,"td"),e(34),i(),e(35,`
                      `),t(36,"td"),e(37),i(),e(38,`
                      `),t(39,"td"),e(40,`
                        `),t(41,"button",29),E("click",function(){let a=V(r).$implicit,l=_();return b(l.verVenta(a,a._id))}),e(42,`
                          `),p(),m(43,"svg",30),e(44,`
                        `),i(),e(45,`
                        `),S(),t(46,"button",31),E("click",function(){let a=V(r).$implicit,l=_();return b(l.eliminarVenta(a._id))}),e(47,`
                          `),p(),m(48,"svg",32),e(49,`
                        `),i(),e(50,`
                    `),i(),e(51,`
                    `),i(),e(52,`
                  `)}if(c&2){let r=d.$implicit,n=d.$index;o(4),x(n+1),o(3),x(r.cliente.Nombre),o(3),x(r.cliente.Apellido),o(3),x(r.cliente.CI),o(3),D("",r.celular.marca," ",r.celular.modelo,""),o(3),x(r.celular.imei),o(3),P("",r.celular.precio," Bs"),o(3),x(r.celular.descuento),o(3),x(r.descuentoAplicado),o(3),x(r.fecha),o(3),x(r.metododePago),o(3),x(r.total)}}var _e=(()=>{let d=class d{constructor(n,a,l,s){this.fb=n,this.ventaService=a,this.inventarioService=l,this.clienteService=s,this.listaVentas=[],this.ventaModelo=new Z,this.cargando=!1,this.detalleVenta={},this.actualizarId="",this.validarFormulario=this.fb.group({clienteId:[""],celularId:[""],metododePago:[""]}),this.validarFormularioVentaCIIMEI=this.fb.group({CI:["",h.required],IMEI:["",h.required],metododePago:["",h.required]}),this.listadeVentas=[],this.listadeClientes=[],this.listadeCelulares=[],this.getVentas(),this.getCelulares(),this.getClientes()}getCelulares(){this.cargando=!0,this.inventarioService.getCelulares().subscribe(n=>{this.listadeCelulares=n.filter(a=>!a.vendido),console.log(this.listadeCelulares),this.cargando=!1},n=>{console.error(n)})}getClientes(){this.cargando=!0,this.clienteService.getClientes().subscribe(n=>{this.listadeClientes=n,console.log(this.listadeClientes),this.cargando=!1},n=>{console.error(n)})}crearVentaPorCIyIMEI(){console.log("Iniciando proceso de creaci\xF3n de venta por CI y IMEI..."),console.log(this.validarFormularioVentaCIIMEI);let n=this.validarFormularioVentaCIIMEI.get("CI")?.value,a=this.validarFormularioVentaCIIMEI.get("IMEI")?.value,l=this.validarFormularioVentaCIIMEI.get("metododePago")?.value;n&&a&&l?this.ventaService.crearVentaPorCIyIMEI(n,a,l).subscribe(s=>{console.log("Respuesta del servidor:",s),u.default.fire({icon:"success",title:"Venta Agregada",timer:2e3}),console.log("Formulario reseteado"),this.validarFormularioVentaCIIMEI.reset(),console.log("Obteniendo ventas actualizadas..."),this.getVentas()},s=>{console.error("Error al crear la venta por CI y IMEI:",s),u.default.fire({icon:"error",title:"Error al agregar la venta",text:s.error.msg||"Hubo un problema al agregar la venta. Por favor, int\xE9ntalo de nuevo.",timer:2e3})}):(console.error("Por favor, completa todos los campos."),u.default.fire({icon:"error",title:"Campos incompletos",text:"Por favor, completa todos los campos.",timer:2e3}))}crearVenta(){console.log("Datos del formulario:",this.validarFormulario.value),this.ventaService.crearVenta(this.validarFormulario.value).subscribe(n=>{console.log("Respuesta del servidor:",n),u.default.fire({icon:"success",title:"Venta Agregada",timer:2e3}),console.log("Formulario reseteado"),this.validarFormulario.reset(),console.log("Obteniendo ventas actualizadas..."),this.getVentas()},n=>{console.error("Error al realizar la venta:",n),u.default.fire({icon:"error",title:"Llenar todos los campos",timer:2e3})})}getVentas(){this.cargando=!0,this.ventaService.getVentas().subscribe(n=>{this.listadeVentas=n,this.cargando=!1},n=>{console.error(n)})}verVenta(n,a){if(!n){console.error("El objeto venta es nulo o indefinido.");return}console.log("Venta a visualizar:",n),console.log("ID de la venta:",a),u.default.fire({title:"Editar M\xE9todo de Pago",html:`
        <form id="editarVentaForm">
          <div class="mb-3">
            <label for="metododePago" class="form-label">M\xE9todo de Pago</label>
            <select class="form-select" id="metododePago">
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="QR transferencia">QR Transferencia</option>
            </select>
          </div>
        </form>
      `,showCancelButton:!0,confirmButtonText:"Guardar",cancelButtonText:"Cancelar",preConfirm:()=>{let l=document.getElementById("editarVentaForm");if(!l.checkValidity())return u.default.showValidationMessage("Por favor, completa todos los campos."),!1;console.log("Valor de metododePago:",l.metododePago.value);let s={metododePago:l.metododePago.value};return console.log("Venta editada:",s),this.guardarVentaEditada(a,s),!0}})}guardarVentaEditada(n,a){this.ventaService.actualizarVenta(n,a).subscribe({next:l=>{console.log("Venta editada exitosamente",l),this.getVentas(),u.default.fire({icon:"success",title:"Venta actualizada",timer:2e3})},error:l=>{console.error("Error al editar venta:",l),u.default.fire({icon:"error",title:"Error",text:"Hubo un problema al editar la venta. Por favor, int\xE9ntalo de nuevo.",timer:2e3})}})}eliminarVenta(n){this.ventaService.eliminarVenta(n).subscribe(a=>{u.default.fire({icon:"success",title:"Venta eliminada",timer:2e3}),console.log(a),this.getVentas()},a=>{console.error(a)})}filterCelulares(n){let a=n.target.value.toLowerCase()}};d.\u0275fac=function(a){return new(a||d)(v(K),v(ee),v(X),v(Y))},d.\u0275cmp=y({type:d,selectors:[["app-ventas"]],standalone:!0,features:[w],decls:245,vars:3,consts:[["xs","12"],[1,"mb-4"],[1,"text-center"],["action","","id","validarFormulario",3,"formGroup"],[1,"container"],[1,"col-12"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"form-group","row","align-items-center"],["for","marca",1,"col-sm-4","col-form-label"],[1,"col-sm-6"],["type","text","id","clienteId","name","clienteId","formControlName","clienteId",1,"form-control"],["for","modelo",1,"col-sm-4","col-form-label"],["type","text","id","celularId","name","celularId","formControlName","celularId",1,"form-control"],["aria-label","Default select example","cSelect","","id","metododePago","name","metododePago","formControlName","metododePago",1,"form-control"],["value","efectivo"],["value","QR transferencia"],["value","tarjeta"],[1,"d-grid","gap-2","col-6","mx-auto"],["type","button","shape","rounded-pill",1,"btn","btn-outline-success","btn-outline-isra",3,"click"],["cIcon","","name","cil-save",1,"me-2"],["action","","id","validarFormularioVentaCIIMEI",3,"formGroup"],["aria-label","Default select example","cSelect","","id","IMEI","name","IMEI","formControlName","IMEI",1,"form-control"],["aria-label","Default select example","cSelect","","id","CI","name","CI","formControlName","CI",1,"form-control"],["cTable","",3,"hover"],[1,"thead-dark"],["scope","col"],[3,"value"],["scope","row"],["cButton","","color","warning","variant","outline",3,"click"],["cIcon","","name","cil-pencil",1,"me-2"],["cButton","","color","danger","variant","outline",1,"btn-outline-isra",3,"click"],["cIcon","","name","cil-trash",1,"me-2"]],template:function(a,l){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`

    `),t(4,"c-card",1),e(5,`
      `),m(6,"br"),e(7,`
      `),t(8,"h1",2),e(9,"Realizar Venta por ID"),i(),m(10,"br"),e(11,`
      `),t(12,"form",3),e(13,`
       `),t(14,"div",4),e(15,`
          `),t(16,"div",5),e(17,`

            `),t(18,"div",6),e(19,`
              `),t(20,"div",7),e(21,`
                  `),t(22,"div",8),e(23,`
                      `),t(24,"label",9),e(25,"Cliente ID"),i(),e(26,`
                      `),t(27,"div",10),e(28,`
                          `),m(29,"input",11),e(30,`
                      `),i(),e(31,`
                  `),i(),e(32,`
              `),i(),e(33,`
              `),t(34,"div",7),e(35,`
                  `),t(36,"div",8),e(37,`
                      `),t(38,"label",12),e(39,"Celular ID"),i(),e(40,`
                      `),t(41,"div",10),e(42,`
                          `),m(43,"input",13),e(44,`
                      `),i(),e(45,`
                  `),i(),e(46,`
              `),i(),e(47,`
              `),t(48,"div",7),e(49,`
                `),t(50,"div",8),e(51,`
                    `),t(52,"label",12),e(53,"Tipo de Pago"),i(),e(54,`
                    `),t(55,"div",10),e(56,`
                        `),t(57,"select",14),e(58,` >
                          `),m(59,"option"),e(60,`
                          `),t(61,"option",15),e(62,"efectivo"),i(),e(63,`
                          `),t(64,"option",16),e(65,"QR transferencia"),i(),e(66,`
                          `),t(67,"option",17),e(68,"tarjeta"),i(),e(69,`
                        `),i(),e(70,`
                    `),i(),e(71,`
                `),i(),e(72,`
            `),i(),e(73,`
            `),i(),e(74,`

          `),i(),e(75,`
          `),i(),e(76,`
        `),m(77,"br")(78,"br"),e(79,`

        `),t(80,"div",18),e(81,`
          `),t(82,"button",19),E("click",function(){return l.crearVenta()}),p(),m(83,"svg",20),e(84,`
            Realizar Venta
          `),i(),e(85,`

        `),i(),e(86,`
      `),i(),e(87,`
      `),S(),m(88,"br"),e(89,`
      `),t(90,"h1",2),e(91,"Realizar Venta por modelo & CI"),i(),m(92,"br"),e(93,`

      `),t(94,"form",21),e(95,`
        `),t(96,"div",4),e(97,`
           `),t(98,"div",5),e(99,`

             `),t(100,"div",6),e(101,`
               `),t(102,"div",7),e(103,`
                   `),t(104,"div",8),e(105,`
                       `),t(106,"label",9),e(107,"imei"),i(),e(108,`
                       `),t(109,"div",10),e(110,`
                        `),t(111,"select",22),e(112,` >
                          `),g(113,ne,4,4,null,null,f),i(),e(115,`
                       `),i(),e(116,`

                   `),i(),e(117,`
               `),i(),e(118,`
               `),t(119,"div",7),e(120,`
                   `),t(121,"div",8),e(122,`
                       `),t(123,"label",12),e(124,"CI"),i(),e(125,`
                       `),t(126,"div",10),e(127,`
                        `),t(128,"select",23),e(129,` >
                          `),g(130,ae,4,4,null,null,f),i(),e(132,`

                       `),i(),e(133,`
                   `),i(),e(134,`
               `),i(),e(135,`
               `),t(136,"div",7),e(137,`
                 `),t(138,"div",8),e(139,`
                     `),t(140,"label",12),e(141,"Tipo de Pago"),i(),e(142,`
                     `),t(143,"div",10),e(144,`
                         `),t(145,"select",14),e(146,` >
                           `),m(147,"option"),e(148,`
                           `),t(149,"option",15),e(150,"efectivo"),i(),e(151,`
                           `),t(152,"option",16),e(153,"QR transferencia"),i(),e(154,`
                           `),t(155,"option",17),e(156,"tarjeta"),i(),e(157,`
                         `),i(),e(158,`
                     `),i(),e(159,`
                 `),i(),e(160,`
             `),i(),e(161,`
             `),i(),e(162,`

           `),i(),e(163,`
           `),i(),e(164,`
         `),m(165,"br")(166,"br"),e(167,`

         `),t(168,"div",18),e(169,`
           `),t(170,"button",19),E("click",function(){return l.crearVentaPorCIyIMEI()}),p(),m(171,"svg",20),e(172,`
             Realizar Venta
           `),i(),e(173,`

         `),i(),e(174,`
       `),i(),e(175,`




        `),S(),m(176,"br"),e(177,`
        `),t(178,"h1",2),e(179,"lista de Ventas"),i(),e(180,`
        `),t(181,"div",4),e(182,`
          `),t(183,"div",6),e(184,`
            `),t(185,"div",5),e(186,`
              `),t(187,"table",24),e(188,`
                `),t(189,"thead",25),e(190,`
                `),t(191,"tr"),e(192,`
                  `),t(193,"th",26),e(194,"#"),i(),e(195,`
                  `),t(196,"th",26),e(197,"Nombres"),i(),e(198,`
                  `),t(199,"th",26),e(200,"Apellido"),i(),e(201,`
                  `),t(202,"th",26),e(203,"CI"),i(),e(204,`
                  `),t(205,"th",26),e(206,"Modelo"),i(),e(207,`
                  `),t(208,"th",26),e(209,"Imei"),i(),e(210,`
                  `),t(211,"th",26),e(212,"precio"),i(),e(213,`
                  `),t(214,"th",26),e(215,"descuento %"),i(),e(216,`
                  `),t(217,"th",26),e(218,"descuento BS"),i(),e(219,`

                  `),t(220,"th",26),e(221,"fecha"),i(),e(222,`
                  `),t(223,"th",26),e(224,"Tipo de pago"),i(),e(225,`
                  `),t(226,"th",26),e(227,"total"),i(),e(228,`
                  `),t(229,"th",26),e(230,"acciones"),i(),e(231,`
                `),i(),e(232,`
                `),i(),e(233,`
                `),t(234,"tbody"),e(235,`
                  `),g(236,re,53,13,null,null,f),i(),e(238,`
              `),i(),e(239,`

            `),i(),e(240,`
          `),i(),e(241,`
        `),i(),e(242,`

    `),i(),e(243,`
  `),i(),e(244,`

`),i()),a&2&&(o(12),I("formGroup",l.validarFormulario),o(82),I("formGroup",l.validarFormularioVentaCIIMEI),o(19),C(l.listadeCelulares),o(17),C(l.listadeClientes),o(57),I("hover",!0),o(49),C(l.listadeVentas))},dependencies:[j,R,B,W,H,q,J,G,O,A,$,L,Q,U,N,k,z]});let c=d;return c})();export{_e as VentasComponent};
