import{C as o,F as c,i as l,ub as p}from"./chunk-O3ZUDSFI.js";var i="http://localhost:3000",u=(()=>{let e=class e{constructor(t){this.http=t}crearCliente(t){return this.http.post(`${i}/cliente`,t)}getClientes(){return this.http.get(`${i}/cliente`).pipe(l(t=>t.clientes))}getClienteDetalle(t){return this.http.get(`${i}/cliente/${t}`)}actualizarCliente(t,n){return this.http.put(`${i}/cliente/${t}`,n)}eliminarCliente(t){return this.http.delete(`${i}/cliente/${t}`)}};e.\u0275fac=function(n){return new(n||e)(c(p))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{u as a};