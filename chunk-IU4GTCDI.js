import{a as U}from"./chunk-MA4VDBPG.js";import{a as Z}from"./chunk-MUXAHXIO.js";import"./chunk-QJ4FMHYO.js";import{b as B,c as G,d as P,e as A,l as L,m as $,o as j,q as R,u as H,w as z,x as q}from"./chunk-RB3RUY6Z.js";import{$ as o,Da as I,Ea as v,Fa as b,I as F,N as S,O as h,Ob as D,P as u,Pa as e,Q as E,Qa as c,Xd as O,Za as k,aa as f,hc as N,id as T,jd as V,na as C,ua as _,va as y,wa as M,xa as t,ya as i,yc as w,za as l}from"./chunk-O3ZUDSFI.js";import{f as Y}from"./chunk-YIEKTC7C.js";var x=Y(Z());var p=class{constructor(d,a="",r="",n="",m="",g="",J=0,K="",Q=0,W="",X){this._id=d,this.marca=a,this.modelo=r,this.color=n,this.almacenamiento=m,this.ram=g,this.bateria=J,this.imei=K,this.precio=Q,this.descuento=W,this.vendido=X}};function ee(s,d){if(s&1){let a=I();e(0,`
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
                      `),t(33,"td"),e(34,`
                        `),t(35,"button",29),v("click",function(){let n=S(a).$implicit,m=b();return h(m.editarCelular(n,n._id))}),e(36,`
                          `),u(),l(37,"svg",30),e(38,`
                        `),i(),e(39,`
                        `),E(),t(40,"button",31),v("click",function(){let n=S(a).$implicit,m=b();return h(m.eliminarCelular(n._id))}),e(41,`
                          `),u(),l(42,"svg",32),e(43,`
                        `),i(),e(44,`
                    `),i(),e(45,`
                  `),i(),e(46,`
                  `)}if(s&2){let a=d.$implicit,r=d.$index;o(4),c(r+1),o(3),c(a.marca),o(3),c(a.modelo),o(3),c(a.ram),o(3),c(a.color),o(3),c(a.ram),o(3),c(a.bateria),o(3),c(a.precio),o(3),c(a.descuento),o(3),c(a.imei)}}var fe=(()=>{let d=class d{constructor(r,n){this.fb=r,this.inventarioService=n,this.listaCelulares=[],this.CelularModelo=new p,this.cargando=!1,this.detalleCelular={},this.actualiarid="",this.validarFormulario=this.fb.group({_id:[,],marca:[,],modelo:[,],color:[,],almacenamiento:[,],ram:[,],bateria:[,],imei:[,[G.required]],precio:[,],descuento:[,]}),this.listadeCelulares=[],this.getCelulares()}crearCelular(){console.log(this.validarFormulario.value),this.inventarioService.crearCelular(this.validarFormulario.value).subscribe(r=>{x.default.fire({icon:"success",title:"Celular Agregado al inventario",timer:2e3}),console.log(r),this.validarFormulario.reset(),this.getCelulares()},r=>{x.default.fire({icon:"error",title:"Llenar todos los campos",timer:2e3}),console.error(r.error)})}getCelulares(){this.cargando=!0,this.inventarioService.getCelulares().subscribe(r=>{this.listadeCelulares=r.filter(n=>!n.vendido),this.cargando=!1},r=>{console.error(r)})}editarCelular(r,n){if(r?(this.validarFormulario.patchValue(r),console.log(this.validarFormulario.value),console.log(n),this.actualiarid=n,this.inventarioService.detalleCelular(n).subscribe(m=>{this.detalleCelular=m,console.log(this.detalleCelular),console.log(this.actualiarid)},m=>{console.log(m)})):console.error("El objeto celular es nulo o indefinido."),!this.validarFormulario.valid){console.log(this.validarFormulario.value);return}}guardarOEditarCelular(){if(this.actualiarid){let r={_id:this.actualiarid,marca:this.validarFormulario.value.marca,modelo:this.validarFormulario.value.modelo,color:this.validarFormulario.value.color,almacenamiento:this.validarFormulario.value.almacenamiento,ram:this.validarFormulario.value.ram,bateria:this.validarFormulario.value.bateria,imei:this.validarFormulario.value.imei,precio:this.validarFormulario.value.precio,descuento:this.validarFormulario.value.descuento};console.log("Datos del celular a editar:",r),this.inventarioService.actualizarCelular(this.actualiarid,r).subscribe({next:n=>{console.log("Celular editado exitosamente",n),this.getCelulares(),this.validarFormulario.reset(),this.actualiarid="",x.default.fire({icon:"success",title:"Celular actualizado inventario",timer:2e3})},error:n=>{console.error("Error al editar celular:",n)}})}else{let r={marca:this.validarFormulario.value.marca,modelo:this.validarFormulario.value.modelo,color:this.validarFormulario.value.color,almacenamiento:this.validarFormulario.value.almacenamiento,ram:this.validarFormulario.value.ram,bateria:this.validarFormulario.value.bateria,imei:this.validarFormulario.value.imei,precio:this.validarFormulario.value.precio,descuento:this.validarFormulario.value.descuento};console.log("Datos del nuevo celular:",r),this.inventarioService.crearCelular(r).subscribe({next:n=>{console.log("Celular agregado exitosamente",n),x.default.fire({icon:"success",title:"Celular Agregado al inventario",timer:2e3}),this.getCelulares(),this.validarFormulario.reset()},error:n=>{x.default.fire({icon:"error",title:"Llenar todos los campos",timer:2e3}),console.error("Error al agregar celular:",n)}})}}eliminarCelular(r){this.inventarioService.eliminarcelular(r).subscribe(n=>{x.default.fire({icon:"success",title:"Celular eliminado del inventario",timer:2e3}),console.log(n),this.getCelulares()},n=>{console.error(n)})}};d.\u0275fac=function(n){return new(n||d)(f(H),f(U))},d.\u0275cmp=F({type:d,selectors:[["app-stock"]],standalone:!0,features:[k],decls:231,vars:2,consts:[["xs","12"],[1,"mb-4"],[1,"text-center"],["action","","id","validarFormulario",3,"formGroup"],[1,"container"],[1,"col-12"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"form-group","row","align-items-center"],["for","marca",1,"col-sm-4","col-form-label"],[1,"col-sm-6"],["type","text","id","marca","name","marca","formControlName","marca",1,"form-control"],["for","modelo",1,"col-sm-4","col-form-label"],["type","text","id","modelo","name","modelo","fo","","formControlName","modelo",1,"form-control"],["for","rom",1,"col-sm-4","col-form-label"],["type","text","id","almacenamiento","name","almacenamiento","fo","","formControlName","almacenamiento",1,"form-control"],["type","text","id","color","name","color","fo","","formControlName","color",1,"form-control"],["type","text","id","ram","name","ram","fo","","formControlName","ram",1,"form-control"],["type","number","id","bateria","name","bateria","fo","","formControlName","bateria",1,"form-control"],["type","number","id","precio","name","precio","fo","","formControlName","precio",1,"form-control"],["type","text","id","descuento","name","descuento","fo","","formControlName","descuento",1,"form-control"],["type","text","id","imei","name","imei","fo","","formControlName","imei",1,"form-control"],[1,"d-grid","gap-2","col-6","mx-auto"],["type","submit","shape","rounded-pill",1,"btn","btn-outline-success","btn-outline-isra",3,"click"],["cIcon","","name","cil-save",1,"me-2"],[1,"col-11"],["cTable","",3,"hover"],["scope","col"],["scope","row"],["cButton","","color","warning","variant","outline",3,"click"],["cIcon","","name","cil-pencil",1,"me-2"],["cButton","","color","danger","variant","outline",1,"btn-outline-isra",3,"click"],["cIcon","","name","cil-trash",1,"me-2"]],template:function(n,m){n&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`

    `),t(4,"c-card",1),e(5,`
      `),l(6,"br"),e(7,`
      `),t(8,"h1",2),e(9,"Stock de Celulares"),i(),e(10,`
      `),t(11,"form",3),e(12,`
        `),t(13,"div",4),e(14,`
          `),t(15,"div",5),e(16,`


            `),t(17,"div",6),e(18,`
              `),t(19,"div",7),e(20,`
                  `),t(21,"div",8),e(22,`
                      `),t(23,"label",9),e(24,"Marca"),i(),e(25,`
                      `),t(26,"div",10),e(27,`
                          `),l(28,"input",11),e(29,`
                      `),i(),e(30,`
                  `),i(),e(31,`
              `),i(),e(32,`
              `),t(33,"div",7),e(34,`
                  `),t(35,"div",8),e(36,`
                      `),t(37,"label",12),e(38,"Modelo"),i(),e(39,`
                      `),t(40,"div",10),e(41,`
                          `),l(42,"input",13),e(43,`
                      `),i(),e(44,`
                  `),i(),e(45,`
              `),i(),e(46,`
              `),t(47,"div",7),e(48,`
                  `),t(49,"div",8),e(50,`
                      `),t(51,"label",14),e(52,"ROM"),i(),e(53,`
                      `),t(54,"div",10),e(55,`
                          `),l(56,"input",15),e(57,`
                      `),i(),e(58,`
                  `),i(),e(59,`
              `),i(),e(60,`
          `),i(),e(61,`
          `),l(62,"br"),e(63,`

          `),t(64,"div",6),e(65,`
            `),t(66,"div",7),e(67,`
                `),t(68,"div",8),e(69,`
                    `),t(70,"label",9),e(71,"Color"),i(),e(72,`
                    `),t(73,"div",10),e(74,`
                        `),l(75,"input",16),e(76,`
                    `),i(),e(77,`
                `),i(),e(78,`
            `),i(),e(79,`
            `),t(80,"div",7),e(81,`
                `),t(82,"div",8),e(83,`
                    `),t(84,"label",12),e(85,"RAM"),i(),e(86,`
                    `),t(87,"div",10),e(88,`
                        `),l(89,"input",17),e(90,`
                    `),i(),e(91,`
                `),i(),e(92,`
            `),i(),e(93,`
            `),t(94,"div",7),e(95,`
                `),t(96,"div",8),e(97,`
                    `),t(98,"label",14),e(99,"Bateria"),i(),e(100,`
                    `),t(101,"div",10),e(102,`
                        `),l(103,"input",18),e(104,`
                    `),i(),e(105,`
                `),i(),e(106,`
            `),i(),e(107,`
        `),i(),e(108,`
        `),l(109,"br"),e(110,`

        `),t(111,"div",6),e(112,`
          `),t(113,"div",7),e(114,`
              `),t(115,"div",8),e(116,`
                  `),t(117,"label",9),e(118,"Precio"),i(),e(119,`
                  `),t(120,"div",10),e(121,`
                      `),l(122,"input",19),e(123,`
                  `),i(),e(124,`
              `),i(),e(125,`
          `),i(),e(126,`
          `),t(127,"div",7),e(128,`
              `),t(129,"div",8),e(130,`
                  `),t(131,"label",12),e(132,"descuento"),i(),e(133,`
                  `),t(134,"div",10),e(135,`
                      `),l(136,"input",20),e(137,`
                  `),i(),e(138,`
              `),i(),e(139,`
          `),i(),e(140,`
          `),t(141,"div",7),e(142,`
              `),t(143,"div",8),e(144,`
                  `),t(145,"label",14),e(146,"imei"),i(),e(147,`
                  `),t(148,"div",10),e(149,`
                      `),l(150,"input",21),e(151,`
                  `),i(),e(152,`
              `),i(),e(153,`
          `),i(),e(154,`
      `),i(),e(155,`
          `),i(),e(156,`
        `),i(),l(157,"br")(158,"br"),e(159,`

        `),t(160,"div",22),e(161,`
          `),t(162,"button",23),v("click",function(){return m.guardarOEditarCelular()}),u(),l(163,"svg",24),e(164,`

          `),i(),e(165,`

        `),i(),e(166,`
      `),i(),e(167,`




        `),E(),l(168,"br"),e(169,`
        `),t(170,"h1",2),e(171,"lista de Celulares"),i(),e(172,`
        `),t(173,"div",4),e(174,`
          `),t(175,"div",6),e(176,`
            `),t(177,"div",25),e(178,`
              `),t(179,"table",26),e(180,`
                `),t(181,"thead"),e(182,`
                `),t(183,"tr"),e(184,`
                  `),t(185,"th",27),e(186,"#"),i(),e(187,`
                  `),t(188,"th",27),e(189,"Marca"),i(),e(190,`
                  `),t(191,"th",27),e(192,"Modelo"),i(),e(193,`
                  `),t(194,"th",27),e(195,"rom"),i(),e(196,`
                  `),t(197,"th",27),e(198,"color"),i(),e(199,`
                  `),t(200,"th",27),e(201,"ram"),i(),e(202,`
                  `),t(203,"th",27),e(204,"bateria"),i(),e(205,`
                  `),t(206,"th",27),e(207,"precio"),i(),e(208,`
                  `),t(209,"th",27),e(210,"descuento"),i(),e(211,`
                  `),t(212,"th",27),e(213,"imei"),i(),e(214,`
                  `),t(215,"th",27),e(216,"acciones"),i(),e(217,`
                `),i(),e(218,`
                `),i(),e(219,`
                `),t(220,"tbody"),e(221,`
                  `),y(222,ee,47,10,null,null,_),i(),e(224,`
              `),i(),e(225,`

            `),i(),e(226,`
          `),i(),e(227,`
        `),i(),e(228,`

    `),i(),e(229,`
  `),i(),e(230,`

`),i()),n&2&&(o(11),C("formGroup",m.validarFormulario),o(168),C("hover",!0),o(43),M(m.listadeCelulares))},dependencies:[V,T,w,q,L,B,$,P,A,j,R,z,N,D,O],styles:['@charset "UTF-8";.btn-outline-isra[_ngcontent-%COMP%]:hover, .btn-outline-isra[_ngcontent-%COMP%]:focus{color:#fff}.btn-outline-isra[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .btn-outline-isra[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%]{fill:#fff}']});let s=d;return s})();export{fe as StockComponent};
