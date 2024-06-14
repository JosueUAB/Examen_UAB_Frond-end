import{a as q}from"./chunk-ONWU4JFM.js";import{a as K}from"./chunk-MUXAHXIO.js";import"./chunk-QJ4FMHYO.js";import{b as k,c as z,d as B,e as G,l as O,m as P,o as L,q as $,u as j,w as H,x as R}from"./chunk-RB3RUY6Z.js";import{$ as m,Da as N,Ea as v,Fa as E,I as g,N as p,O as f,Ob as D,P as u,Pa as e,Q as S,Qa as d,Xd as V,Za as y,aa as h,hc as A,id as T,jd as M,na as b,ua as _,va as F,wa as I,xa as t,ya as i,yc as w,za as r}from"./chunk-O3ZUDSFI.js";import{f as J}from"./chunk-YIEKTC7C.js";var x=J(K());var C=class{constructor(a,s="",l="",n="",o="",U=0){}};function Q(c,a){if(c&1){let s=N();e(0,`
                    `),t(1,"tr"),e(2,`
                      `),t(3,"th",23),e(4),i(),e(5,`
                      `),t(6,"td"),e(7),i(),e(8,`
                      `),t(9,"td"),e(10),i(),e(11,`
                      `),t(12,"td"),e(13),i(),e(14,`
                      `),t(15,"td"),e(16),i(),e(17,`
                      `),t(18,"td"),e(19),i(),e(20,`

                      `),t(21,"td"),e(22,`
                        `),t(23,"button",24),v("click",function(){let n=p(s).$implicit,o=E();return f(o.editarCliente(n,n._id))}),e(24,`
                          `),u(),r(25,"svg",25),e(26,`
                        `),i(),e(27,`
                        `),S(),t(28,"button",26),v("click",function(){let n=p(s).$implicit,o=E();return f(o.eliminarCliente(n._id))}),e(29,`
                          `),u(),r(30,"svg",27),e(31,`
                        `),i(),e(32,`
                    `),i(),e(33,`
                    `),i(),e(34,`
                  `)}if(c&2){let s=a.$implicit,l=a.$index;m(4),d(l+1),m(3),d(s.CI),m(3),d(s.Nombre),m(3),d(s.Apellido),m(3),d(s.Correo),m(3),d(s.telefono)}}var ve=(()=>{let a=class a{constructor(l,n){this.fb=l,this.clienteService=n,this.listaClientes=[],this.clienteModelo=new C,this.cargando=!1,this.detalleCliente={},this.actualizarId="",this.validarFormulario=this.fb.group({CI:["",z.required],Nombre:[""],Apellido:[""],Correo:[""],telefono:[""]}),this.listadeClientes=[],this.getClientes()}crearCliente(){console.log(this.validarFormulario.value),this.clienteService.crearCliente(this.validarFormulario.value).subscribe(l=>{x.default.fire({icon:"success",title:"Cliente Agregado",timer:2e3}),console.log(l),this.validarFormulario.reset(),this.getClientes()},l=>{x.default.fire({icon:"error",title:"Llenar todos los campos",timer:2e3}),console.error(l.error)})}getClientes(){this.cargando=!0,this.clienteService.getClientes().subscribe(l=>{this.listadeClientes=l,console.log(this.listadeClientes),this.cargando=!1},l=>{console.error(l)})}editarCliente(l,n){if(l?(this.validarFormulario.patchValue(l),console.log(this.validarFormulario.value),console.log(n),this.actualizarId=n,this.clienteService.getClienteDetalle(n).subscribe(o=>{this.detalleCliente=o,console.log(this.detalleCliente),console.log(this.actualizarId)},o=>{console.log(o)})):console.error("El objeto cliente es nulo o indefinido."),!this.validarFormulario.valid){console.log(this.validarFormulario.value);return}}guardarOEditarCliente(){let l={CI:this.validarFormulario.value.CI,Nombre:this.validarFormulario.value.Nombre,Apellido:this.validarFormulario.value.Apellido,Correo:this.validarFormulario.value.Correo,telefono:this.validarFormulario.value.telefono};this.actualizarId?(console.log("Datos del cliente a editar:",l),this.clienteService.actualizarCliente(this.actualizarId,l).subscribe({next:n=>{console.log("Cliente editado exitosamente",n),this.getClientes(),this.validarFormulario.reset(),this.actualizarId="",x.default.fire({icon:"success",title:"Cliente actualizado",timer:2e3})},error:n=>{console.error("Error al editar cliente:",n)}})):(console.log("Datos del nuevo cliente:",l),this.clienteService.crearCliente(l).subscribe({next:n=>{console.log("Cliente agregado exitosamente",n),this.getClientes(),this.validarFormulario.reset(),x.default.fire({icon:"success",title:"Cliente agregado",timer:2e3})},error:n=>{x.default.fire({icon:"error",title:"Llenar todos los campos",timer:2e3}),console.error("Error al agregar cliente:",n)}}))}eliminarCliente(l){this.clienteService.eliminarCliente(l).subscribe(n=>{x.default.fire({icon:"success",title:"Cliente eliminado",timer:2e3}),console.log(n),this.getClientes()},n=>{console.error(n)})}};a.\u0275fac=function(n){return new(n||a)(h(j),h(q))},a.\u0275cmp=g({type:a,selectors:[["app-clientes"]],standalone:!0,features:[y],decls:163,vars:2,consts:[["xs","12"],[1,"mb-4"],[1,"text-center"],["action","","id","validarFormulario",3,"formGroup"],[1,"container"],[1,"col-12"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"form-group","row","align-items-center"],["for","marca",1,"col-sm-4","col-form-label"],[1,"col-sm-6"],["type","number","id","CI","name","CI","formControlName","CI",1,"form-control"],["for","modelo",1,"col-sm-4","col-form-label"],["type","text","id","Nombre","name","Nombre","formControlName","Nombre",1,"form-control"],["type","text","id","Apellido","name","Apellido","formControlName","Apellido",1,"form-control"],["type","email","id","Correo","name","Correo","formControlName","Correo",1,"form-control"],["type","number","id","telefono","name","telefono","formControlName","telefono",1,"form-control"],[1,"d-grid","gap-2","col-6","mx-auto"],["type","button","shape","rounded-pill",1,"btn","btn-outline-success","btn-outline-isra",3,"click"],["cIcon","","name","cil-save",1,"me-2"],[1,"col-11"],["cTable","",3,"hover"],["scope","col"],["scope","row"],["cButton","","color","warning","variant","outline",3,"click"],["cIcon","","name","cil-pencil",1,"me-2"],["cButton","","color","danger","variant","outline",1,"btn-outline-isra",3,"click"],["cIcon","","name","cil-trash",1,"me-2"]],template:function(n,o){n&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`

    `),t(4,"c-card",1),e(5,`
      `),r(6,"br"),e(7,`
      `),t(8,"h1",2),e(9,"Registro de Clientes"),i(),e(10,`
      `),t(11,"form",3),e(12,`
        `),t(13,"div",4),e(14,`
          `),t(15,"div",5),e(16,`


            `),t(17,"div",6),e(18,`
              `),t(19,"div",7),e(20,`
                  `),t(21,"div",8),e(22,`
                      `),t(23,"label",9),e(24,"CI"),i(),e(25,`
                      `),t(26,"div",10),e(27,`
                          `),r(28,"input",11),e(29,`
                      `),i(),e(30,`
                  `),i(),e(31,`
              `),i(),e(32,`
              `),t(33,"div",7),e(34,`
                  `),t(35,"div",8),e(36,`
                      `),t(37,"label",12),e(38,"Nombres"),i(),e(39,`
                      `),t(40,"div",10),e(41,`
                          `),r(42,"input",13),e(43,`
                      `),i(),e(44,`
                  `),i(),e(45,`
              `),i(),e(46,`
          `),i(),e(47,`
          `),r(48,"br"),e(49,`

          `),t(50,"div",6),e(51,`
            `),t(52,"div",7),e(53,`
                `),t(54,"div",8),e(55,`
                    `),t(56,"label",9),e(57,"Apellidos"),i(),e(58,`
                    `),t(59,"div",10),e(60,`
                        `),r(61,"input",14),e(62,`
                    `),i(),e(63,`
                `),i(),e(64,`
            `),i(),e(65,`
            `),t(66,"div",7),e(67,`
                `),t(68,"div",8),e(69,`
                    `),t(70,"label",12),e(71,"Correo"),i(),e(72,`
                    `),t(73,"div",10),e(74,`
                        `),r(75,"input",15),e(76,`
                    `),i(),e(77,`
                `),i(),e(78,`
            `),i(),e(79,`

        `),i(),e(80,`
        `),r(81,"br"),e(82,`
        `),t(83,"div",6),e(84,`
          `),t(85,"div",7),e(86,`
              `),t(87,"div",8),e(88,`
                  `),t(89,"label",9),e(90,"N\xBA Celular"),i(),e(91,`
                  `),t(92,"div",10),e(93,`
                      `),r(94,"input",16),e(95,`
                  `),i(),e(96,`
              `),i(),e(97,`
          `),i(),e(98,`


      `),i(),e(99,`
          `),i(),e(100,`
        `),i(),r(101,"br")(102,"br"),e(103,`

        `),t(104,"div",17),e(105,`
          `),t(106,"button",18),v("click",function(){return o.guardarOEditarCliente()}),u(),r(107,"svg",19),e(108,`
            Guardar
          `),i(),e(109,`
        `),i(),e(110,`
      `),i(),e(111,`




        `),S(),r(112,"br"),e(113,`
        `),t(114,"h1",2),e(115,"lista de Clientes"),i(),e(116,`
        `),t(117,"div",4),e(118,`
          `),t(119,"div",6),e(120,`
            `),t(121,"div",20),e(122,`
              `),t(123,"table",21),e(124,`
                `),t(125,"thead"),e(126,`
                `),t(127,"tr"),e(128,`
                  `),t(129,"th",22),e(130,"#"),i(),e(131,`
                  `),t(132,"th",22),e(133,"CI"),i(),e(134,`
                  `),t(135,"th",22),e(136,"Nombres"),i(),e(137,`
                  `),t(138,"th",22),e(139,"Apellidos"),i(),e(140,`
                  `),t(141,"th",22),e(142,"Correo"),i(),e(143,`
                  `),t(144,"th",22),e(145,"N\xBA Celular"),i(),e(146,`
                  `),t(147,"th",22),e(148,"acciones"),i(),e(149,`
                `),i(),e(150,`
                `),i(),e(151,`
                `),t(152,"tbody"),e(153,`
                  `),F(154,Q,35,6,null,null,_),i(),e(156,`
              `),i(),e(157,`

            `),i(),e(158,`
          `),i(),e(159,`
        `),i(),e(160,`

    `),i(),e(161,`
  `),i(),e(162,`

`),i()),n&2&&(m(11),b("formGroup",o.validarFormulario),m(112),b("hover",!0),m(31),I(o.listadeClientes))},dependencies:[M,T,w,R,O,k,P,B,G,L,$,H,A,D,V],styles:['@charset "UTF-8";.btn-outline-isra[_ngcontent-%COMP%]:hover, .btn-outline-isra[_ngcontent-%COMP%]:focus{color:#fff}.btn-outline-isra[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .btn-outline-isra[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%]{fill:#fff}']});let c=a;return c})();export{ve as ClientesComponent};
