goog.provide('athens.devcards.spinner');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("appear-and-drop",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-40%)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(0)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"var(--anim-opacity-end, 1)"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"var(--anim-opacity-end, 1)"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("spinning",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0deg)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(1079deg)"], null)], null)], 0));
athens.devcards.spinner.spinner_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"place-items","place-items",-1530443900),new cljs.core.Keyword(null,"--anim-opacity-end","--anim-opacity-end",1202313349),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"place-content","place-content",-395756037),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["appear 0.5s ease","center","1","center","0.5rem","10em","grid","center","center","10em","auto"]);
athens.devcards.spinner.spinner_progress_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"3em",new cljs.core.Keyword(null,"height","height",1025178622),"3em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"border","border",1444987323),["1.5px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)))].join(''),new cljs.core.Keyword(null,"border-top-color","border-top-color",-804629899),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"animation","animation",-1248293244),"spinning 3s linear infinite"], null);
athens.devcards.spinner.spinner_message_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"--anim-opacity-end","--anim-opacity-end",1202313349),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"animation","animation",-1248293244),"appear-and-drop 1s 0.75s ease",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"animation-fill-mode","animation-fill-mode",1637181373),"both"], null);
athens.devcards.spinner.initial_spinner_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50vh",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-50%)"], null);
athens.devcards.spinner.spinner_component = (function athens$devcards$spinner$spinner_component(p__31970){
var map__31971 = p__31970;
var map__31971__$1 = (((((!((map__31971 == null))))?(((((map__31971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31971):map__31971);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31971__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31971__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.spinner.spinner_style,style], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.spinner.spinner_progress_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.spinner.spinner_message_style),(function (){var or__4185__auto__ = message;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Loading...";
}
})()], null)], null);
});
athens.devcards.spinner.initial_spinner_component = (function athens$devcards$spinner$initial_spinner_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.spinner.initial_spinner_container),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.spinner.spinner_component], null)], null);
});
goog.exportSymbol('athens.devcards.spinner.initial_spinner_component', athens.devcards.spinner.initial_spinner_component);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Default-Spinner","Default-Spinner",-290996500)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Default-Spinner",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner31973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner31973 = (function (meta31974){
this.meta31974 = meta31974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner31973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31975,meta31974__$1){
var self__ = this;
var _31975__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner31973(meta31974__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner31973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31975){
var self__ = this;
var _31975__$1 = this;
return self__.meta31974;
}));

(athens.devcards.spinner.t_athens$devcards$spinner31973.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner31973.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26592__auto__,devcard_opts__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__26593__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26611__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.spinner.spinner_style)], null);
if(cljs.core.fn_QMARK_(v__26611__auto__)){
return (function (data_atom__26612__auto__,owner__26613__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26611__auto__,data_atom__26612__auto__,owner__26613__auto__], null));
});
} else {
return reagent.core.as_element(v__26611__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26593__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner31973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31974","meta31974",-1723485237,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner31973.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner31973.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner31973");

(athens.devcards.spinner.t_athens$devcards$spinner31973.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.spinner/t_athens$devcards$spinner31973");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner31973.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner31973 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner31973(meta31974){
return (new athens.devcards.spinner.t_athens$devcards$spinner31973(meta31974));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner31973(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Spinner-with-custom-message","Spinner-with-custom-message",-1987622770)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Spinner-with-custom-message",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner31978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner31978 = (function (meta31979){
this.meta31979 = meta31979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner31978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31980,meta31979__$1){
var self__ = this;
var _31980__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner31978(meta31979__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner31978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31980){
var self__ = this;
var _31980__$1 = this;
return self__.meta31979;
}));

(athens.devcards.spinner.t_athens$devcards$spinner31978.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner31978.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26592__auto__,devcard_opts__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__26593__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26611__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.spinner.spinner_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Custom Loading Message"], null))], null);
if(cljs.core.fn_QMARK_(v__26611__auto__)){
return (function (data_atom__26612__auto__,owner__26613__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26611__auto__,data_atom__26612__auto__,owner__26613__auto__], null));
});
} else {
return reagent.core.as_element(v__26611__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26593__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner31978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31979","meta31979",-1149354127,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner31978.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner31978.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner31978");

(athens.devcards.spinner.t_athens$devcards$spinner31978.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.spinner/t_athens$devcards$spinner31978");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner31978.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner31978 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner31978(meta31979){
return (new athens.devcards.spinner.t_athens$devcards$spinner31978(meta31979));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner31978(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.spinner.js.map