pro plot_planck

; plotting spectral radian exitance

for i=1,6 do begin

if i eq 1 then T=273.15
if i eq 2 then T=290.15
if i eq 3 then T=773.15
if i eq 4 then T=1730.15
if i eq 5 then T=3273.15
if i eq 6 then T=5973.15

num=(findgen(1000000))
x=(1+num)/10000000
M=(3.742e-16/((x^5)*(exp(0.0144/(x*T))-1)))/1000000

if i eq 1 then plot,x, yrange=[1,1000000000],xrange=[1e-7, 1e-3],  xtitle='Wavelength (m)', ytitle='Spectral Radiant Exitance (W /m2 /µm)', /ylog, /xlog
if i ne 1 then oplot,x,M

endfor
stop
end