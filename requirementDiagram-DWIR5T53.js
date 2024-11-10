function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire421a,i=t.register;i("lnBXb",function(i,n){e(i.exports,"diagram",()=>B);var r=t("1x80i"),s=t("4kWfH"),a=t("7hgA6");t("76RTQ"),t("f34bP"),t("2266r");var h=t("7xxrv"),o=function(){var e=/* @__PURE__ */(0,h.__name)(function(e,t,i,n){for(i=i||{},n=e.length;n--;i[e[n]]=t);return i},"o"),t=[1,3],i=[1,4],n=[1,5],r=[1,6],s=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],a=[1,18],o=[2,7],l=[1,22],c=[1,23],_=[1,24],d=[1,25],u=[1,26],p=[1,27],g=[1,20],y=[1,28],f=[1,29],m=[62,63],E=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],R=[1,47],b=[1,48],I=[1,49],N=[1,50],S=[1,51],T=[1,52],k=[1,53],v=[53,54],x=[1,64],w=[1,60],O=[1,61],A=[1,62],C=[1,63],L=[1,65],q=[1,69],$=[1,70],D=[1,67],F=[1,68],M=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],P={trace:/* @__PURE__ */(0,h.__name)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:/* @__PURE__ */(0,h.__name)(function(e,t,i,n,r,s,a){var h=s.length-1;switch(r){case 4:this.$=s[h].trim(),n.setAccTitle(this.$);break;case 5:case 6:this.$=s[h].trim(),n.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:n.addRequirement(s[h-3],s[h-4]);break;case 14:n.setNewReqId(s[h-2]);break;case 15:n.setNewReqText(s[h-2]);break;case 16:n.setNewReqRisk(s[h-2]);break;case 17:n.setNewReqVerifyMethod(s[h-2]);break;case 20:this.$=n.RequirementType.REQUIREMENT;break;case 21:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=n.RiskLevel.LOW_RISK;break;case 27:this.$=n.RiskLevel.MED_RISK;break;case 28:this.$=n.RiskLevel.HIGH_RISK;break;case 29:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=n.VerifyType.VERIFY_TEST;break;case 33:n.addElement(s[h-3]);break;case 34:n.setNewElementType(s[h-2]);break;case 35:n.setNewElementDocRef(s[h-2]);break;case 38:n.addRelationship(s[h-2],s[h],s[h-4]);break;case 39:n.addRelationship(s[h-2],s[h-4],s[h]);break;case 40:this.$=n.Relationships.CONTAINS;break;case 41:this.$=n.Relationships.COPIES;break;case 42:this.$=n.Relationships.DERIVES;break;case 43:this.$=n.Relationships.SATISFIES;break;case 44:this.$=n.Relationships.VERIFIES;break;case 45:this.$=n.Relationships.REFINES;break;case 46:this.$=n.Relationships.TRACES}},"anonymous"),table:[{3:1,4:2,6:t,9:i,11:n,13:r},{1:[3]},{3:8,4:2,5:[1,7],6:t,9:i,11:n,13:r},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(s,[2,6]),{3:12,4:2,6:t,9:i,11:n,13:r},{1:[2,2]},{4:17,5:a,7:13,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:_,34:d,35:u,36:p,44:g,62:y,63:f},e(s,[2,4]),e(s,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:a,7:31,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:_,34:d,35:u,36:p,44:g,62:y,63:f},{4:17,5:a,7:32,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:_,34:d,35:u,36:p,44:g,62:y,63:f},{4:17,5:a,7:33,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:_,34:d,35:u,36:p,44:g,62:y,63:f},{4:17,5:a,7:34,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:_,34:d,35:u,36:p,44:g,62:y,63:f},{4:17,5:a,7:35,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:_,34:d,35:u,36:p,44:g,62:y,63:f},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(m,[2,20]),e(m,[2,21]),e(m,[2,22]),e(m,[2,23]),e(m,[2,24]),e(m,[2,25]),e(E,[2,49]),e(E,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:R,56:b,57:I,58:N,59:S,60:T,61:k},{52:54,55:R,56:b,57:I,58:N,59:S,60:T,61:k},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(v,[2,40]),e(v,[2,41]),e(v,[2,42]),e(v,[2,43]),e(v,[2,44]),e(v,[2,45]),e(v,[2,46]),{54:[1,58]},{5:x,20:59,21:w,24:O,26:A,28:C,30:L},{5:q,30:$,46:66,47:D,49:F},{23:71,62:y,63:f},{23:72,62:y,63:f},e(M,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:x,20:77,21:w,24:O,26:A,28:C,30:L},e(M,[2,19]),e(M,[2,33]),{22:[1,78]},{22:[1,79]},{5:q,30:$,46:80,47:D,49:F},e(M,[2,37]),e(M,[2,38]),e(M,[2,39]),{23:81,62:y,63:f},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(M,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(M,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:x,20:106,21:w,24:O,26:A,28:C,30:L},{5:x,20:107,21:w,24:O,26:A,28:C,30:L},{5:x,20:108,21:w,24:O,26:A,28:C,30:L},{5:x,20:109,21:w,24:O,26:A,28:C,30:L},{5:q,30:$,46:110,47:D,49:F},{5:q,30:$,46:111,47:D,49:F},e(M,[2,14]),e(M,[2,15]),e(M,[2,16]),e(M,[2,17]),e(M,[2,34]),e(M,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:/* @__PURE__ */(0,h.__name)(function(e,t){if(t.recoverable)this.trace(e);else{var i=Error(e);throw i.hash=t,i}},"parseError"),parse:/* @__PURE__ */(0,h.__name)(function(e){var t=this,i=[0],n=[],r=[null],s=[],a=this.table,o="",l=0,c=0,_=0,d=s.slice.call(arguments,1),u=Object.create(this.lexer),p={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(p.yy[g]=this.yy[g]);u.setInput(e,p.yy),p.yy.lexer=u,p.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var y=u.yylloc;s.push(y);var f=u.options&&u.options.ranges;function m(){var e;return"number"!=typeof(e=n.pop()||u.lex()||1)&&(e instanceof Array&&(e=(n=e).pop()),e=t.symbols_[e]||e),e}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,h.__name)(function(e){i.length=i.length-2*e,r.length=r.length-e,s.length=s.length-e},"popStack"),(0,h.__name)(m,"lex");for(var E,R,b,I,N,S,T,k,v,x={};;){if(b=i[i.length-1],this.defaultActions[b]?I=this.defaultActions[b]:(null==E&&(E=m()),I=a[b]&&a[b][E]),void 0===I||!I.length||!I[0]){var w="";for(S in v=[],a[b])this.terminals_[S]&&S>2&&v.push("'"+this.terminals_[S]+"'");w=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==E?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(w,{text:u.match,token:this.terminals_[E]||E,line:u.yylineno,loc:y,expected:v})}if(I[0]instanceof Array&&I.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+E);switch(I[0]){case 1:i.push(E),r.push(u.yytext),s.push(u.yylloc),i.push(I[1]),E=null,R?(E=R,R=null):(c=u.yyleng,o=u.yytext,l=u.yylineno,y=u.yylloc,_>0&&_--);break;case 2:if(T=this.productions_[I[1]][1],x.$=r[r.length-T],x._$={first_line:s[s.length-(T||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(T||1)].first_column,last_column:s[s.length-1].last_column},f&&(x._$.range=[s[s.length-(T||1)].range[0],s[s.length-1].range[1]]),void 0!==(N=this.performAction.apply(x,[o,c,l,p.yy,I[1],r,s].concat(d))))return N;T&&(i=i.slice(0,-1*T*2),r=r.slice(0,-1*T),s=s.slice(0,-1*T)),i.push(this.productions_[I[1]][0]),r.push(x.$),s.push(x._$),k=a[i[i.length-2]][i[i.length-1]],i.push(k);break;case 3:return!0}}return!0},"parse")},U={EOF:1,parseError:/* @__PURE__ */(0,h.__name)(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},"parseError"),setInput:/* @__PURE__ */(0,h.__name)(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:/* @__PURE__ */(0,h.__name)(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},"input"),unput:/* @__PURE__ */(0,h.__name)(function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},"unput"),more:/* @__PURE__ */(0,h.__name)(function(){return this._more=!0,this},"more"),reject:/* @__PURE__ */(0,h.__name)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:/* @__PURE__ */(0,h.__name)(function(e){this.unput(this.match.slice(e))},"less"),pastInput:/* @__PURE__ */(0,h.__name)(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:/* @__PURE__ */(0,h.__name)(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:/* @__PURE__ */(0,h.__name)(function(){var e=this.pastInput(),t=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},"showPosition"),test_match:/* @__PURE__ */(0,h.__name)(function(e,t){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},"test_match"),next:/* @__PURE__ */(0,h.__name)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e,t,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!t||i[0].length>t[0].length)){if(t=i,n=s,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,r[s])))return e;if(!this._backtrack)return!1;t=!1;continue}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,r[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:/* @__PURE__ */(0,h.__name)(function(){return this.next()||this.lex()},"lex"),begin:/* @__PURE__ */(0,h.__name)(function(e){this.conditionStack.push(e)},"begin"),popState:/* @__PURE__ */(0,h.__name)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:/* @__PURE__ */(0,h.__name)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:/* @__PURE__ */(0,h.__name)(function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:/* @__PURE__ */(0,h.__name)(function(e){this.begin(e)},"pushState"),stateStackSize:/* @__PURE__ */(0,h.__name)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:/* @__PURE__ */(0,h.__name)(function(e,t,i,n){switch(i){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 48:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:case 10:case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 49:return"qString";case 50:return t.yytext=t.yytext.trim(),62}},"anonymous"),rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};function V(){this.yy={}}return P.lexer=U,(0,h.__name)(V,"Parser"),V.prototype=P,P.Parser=V,new V}();o.parser=o;var l=[],c={},_=/* @__PURE__ */new Map,d={},u=/* @__PURE__ */new Map,p=/* @__PURE__ */(0,h.__name)((e,t)=>(_.has(e)||_.set(e,{name:e,type:t,id:c.id,text:c.text,risk:c.risk,verifyMethod:c.verifyMethod}),c={},_.get(e)),"addRequirement"),g=/* @__PURE__ */(0,h.__name)(()=>_,"getRequirements"),y=/* @__PURE__ */(0,h.__name)(e=>{void 0!==c&&(c.id=e)},"setNewReqId"),f=/* @__PURE__ */(0,h.__name)(e=>{void 0!==c&&(c.text=e)},"setNewReqText"),m=/* @__PURE__ */(0,h.__name)(e=>{void 0!==c&&(c.risk=e)},"setNewReqRisk"),E=/* @__PURE__ */(0,h.__name)(e=>{void 0!==c&&(c.verifyMethod=e)},"setNewReqVerifyMethod"),R=/* @__PURE__ */(0,h.__name)(e=>(u.has(e)||(u.set(e,{name:e,type:d.type,docRef:d.docRef}),(0,a.log).info("Added new requirement: ",e)),d={},u.get(e)),"addElement"),b=/* @__PURE__ */(0,h.__name)(()=>u,"getElements"),I=/* @__PURE__ */(0,h.__name)(e=>{void 0!==d&&(d.type=e)},"setNewElementType"),N=/* @__PURE__ */(0,h.__name)(e=>{void 0!==d&&(d.docRef=e)},"setNewElementDocRef"),S=/* @__PURE__ */(0,h.__name)((e,t,i)=>{l.push({type:e,src:t,dst:i})},"addRelationship"),T=/* @__PURE__ */(0,h.__name)(()=>l,"getRelationships"),k=/* @__PURE__ */(0,h.__name)(()=>{l=[],c={},_=/* @__PURE__ */new Map,d={},u=/* @__PURE__ */new Map,(0,a.clear)()},"clear"),v={RequirementType:{REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},RiskLevel:{LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},VerifyType:{VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Relationships:{CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},getConfig:/* @__PURE__ */(0,h.__name)(()=>(0,a.getConfig2)().req,"getConfig"),addRequirement:p,getRequirements:g,setNewReqId:y,setNewReqText:f,setNewReqRisk:m,setNewReqVerifyMethod:E,setAccTitle:a.setAccTitle,getAccTitle:a.getAccTitle,setAccDescription:a.setAccDescription,getAccDescription:a.getAccDescription,addElement:R,getElements:b,setNewElementType:I,setNewElementDocRef:N,addRelationship:S,getRelationships:T,clear:k},x=/* @__PURE__ */(0,h.__name)(e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,"getStyles"),w={CONTAINS:"contains",ARROW:"arrow"},O=/* @__PURE__ */(0,h.__name)((e,t)=>{let i=e.append("defs").append("marker").attr("id",w.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",w.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${t.line_height},${t.line_height/2}
      M${t.line_height},${t.line_height/2}
      L0,${t.line_height}`).attr("stroke-width",1)},"insertLineEndings"),A={ReqMarkers:w,insertLineEndings:O},C={},L=0,q=/* @__PURE__ */(0,h.__name)((e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",C.rect_min_width+"px").attr("height",C.rect_min_height+"px"),"newRectNode"),$=/* @__PURE__ */(0,h.__name)((e,t,i)=>{let n=C.rect_min_width/2,r=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",n).attr("y",C.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach(e=>{0==s?r.append("tspan").attr("text-anchor","middle").attr("x",C.rect_min_width/2).attr("dy",0).text(e):r.append("tspan").attr("text-anchor","middle").attr("x",C.rect_min_width/2).attr("dy",.75*C.line_height).text(e),s++});let a=1.5*C.rect_padding+s*C.line_height*.75;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",C.rect_min_width).attr("y1",a).attr("y2",a),{titleNode:r,y:a}},"newTitleNode"),D=/* @__PURE__ */(0,h.__name)((e,t,i,n)=>{let r=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",C.rect_padding).attr("y",n).attr("dominant-baseline","hanging"),s=0,a=[];return i.forEach(e=>{let t=e.length;for(;t>30&&s<3;){let i=e.substring(0,30);t=(e=e.substring(30,e.length)).length,a[a.length]=i,s++}if(3==s){let e=a[a.length-1];a[a.length-1]=e.substring(0,e.length-4)+"..."}else a[a.length]=e;s=0}),a.forEach(e=>{r.append("tspan").attr("x",C.rect_padding).attr("dy",C.line_height).text(e)}),r},"newBodyNode"),F=/* @__PURE__ */(0,h.__name)((e,t,i,n)=>{let r=t.node().getTotalLength(),s=t.node().getPointAtLength(.5*r),a="rel"+L;L++;let h=e.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(n).node().getBBox();e.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-h.width/2).attr("y",s.y-h.height/2).attr("width",h.width).attr("height",h.height).attr("fill","white").attr("fill-opacity","85%")},"addEdgeLabel"),M=/* @__PURE__ */(0,h.__name)(function(e,t,i,n,r){let s=i.edge(j(t.src),j(t.dst)),h=(0,a.line_default)().x(function(e){return e.x}).y(function(e){return e.y}),o=e.insert("path","#"+n).attr("class","er relationshipLine").attr("d",h(s.points)).attr("fill","none");t.type==r.db.Relationships.CONTAINS?o.attr("marker-start","url("+(0,a.common_default).getUrl(C.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(o.attr("stroke-dasharray","10,7"),o.attr("marker-end","url("+(0,a.common_default).getUrl(C.arrowMarkerAbsolute)+"#"+A.ReqMarkers.ARROW+"_line_ending)")),F(e,o,C,`<<${t.type}>>`)},"drawRelationshipFromLayout"),P=/* @__PURE__ */(0,h.__name)((e,t,i)=>{e.forEach((e,n)=>{n=j(n),(0,a.log).info("Added new requirement: ",n);let r=i.append("g").attr("id",n),s=q(r,"req-"+n),h=[],o=$(r,n+"_title",[`<<${e.type}>>`,`${e.name}`]);h.push(o.titleNode),h.push(D(r,n+"_body",[`Id: ${e.id}`,`Text: ${e.text}`,`Risk: ${e.risk}`,`Verification: ${e.verifyMethod}`],o.y));let l=s.node().getBBox();t.setNode(n,{width:l.width,height:l.height,shape:"rect",id:n})})},"drawReqs"),U=/* @__PURE__ */(0,h.__name)((e,t,i)=>{e.forEach((e,n)=>{let r=j(n),s=i.append("g").attr("id",r),a="element-"+r,h=q(s,a),o=[],l=$(s,a+"_title",["<<Element>>",`${n}`]);o.push(l.titleNode),o.push(D(s,a+"_body",[`Type: ${e.type||"Not Specified"}`,`Doc Ref: ${e.docRef||"None"}`],l.y));let c=h.node().getBBox();t.setNode(r,{width:c.width,height:c.height,shape:"rect",id:r})})},"drawElements"),V=/* @__PURE__ */(0,h.__name)((e,t)=>(e.forEach(function(e){let i=j(e.src),n=j(e.dst);t.setEdge(i,n,{relationship:e})}),e),"addRelationships"),Y=/* @__PURE__ */(0,h.__name)(function(e,t){t.nodes().forEach(function(i){void 0!==i&&void 0!==t.node(i)&&(e.select("#"+i),e.select("#"+i).attr("transform","translate("+(t.node(i).x-t.node(i).width/2)+","+(t.node(i).y-t.node(i).height/2)+" )"))})},"adjustEntities"),j=/* @__PURE__ */(0,h.__name)(e=>e.replace(/\s/g,"").replace(/\./g,"_"),"elementString"),B={parser:o,db:v,renderer:{draw:/* @__PURE__ */(0,h.__name)((e,t,i,n)=>{let h;let o=(C=(0,a.getConfig2)().requirement).securityLevel;"sandbox"===o&&(h=(0,a.select_default)("#i"+t));let l=("sandbox"===o?(0,a.select_default)(h.nodes()[0].contentDocument.body):(0,a.select_default)("body")).select(`[id='${t}']`);A.insertLineEndings(l,C);let c=new(0,s.Graph)({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:C.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}}),_=n.db.getRequirements(),d=n.db.getElements(),u=n.db.getRelationships();P(_,c,l),U(d,c,l),V(u,c),(0,r.layout)(c),Y(l,c),u.forEach(function(e){M(l,e,c,t,n)});let p=C.rect_padding,g=l.node().getBBox(),y=g.width+2*p,f=g.height+2*p;(0,a.configureSvgSize)(l,f,y,C.useMaxWidth),l.attr("viewBox",`${g.x-p} ${g.y-p} ${y} ${f}`)},"draw")},styles:x}}),i("4kWfH",function(i,n){e(i.exports,"Graph",()=>o);var r=t("76RTQ"),s=t("f34bP"),a=t("2266r"),h=t("7xxrv"),o=class{static{(0,h.__name)(this,"Graph")}constructor(e={}){this._isDirected=!Object.prototype.hasOwnProperty.call(e,"directed")||e.directed,this._isMultigraph=!!Object.prototype.hasOwnProperty.call(e,"multigraph")&&e.multigraph,this._isCompound=!!Object.prototype.hasOwnProperty.call(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=(0,a.constant_default)(void 0),this._defaultEdgeLabelFn=(0,a.constant_default)(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return(0,a.isFunction_default)(e)||(e=(0,a.constant_default)(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return(0,r.keys_default)(this._nodes)}sources(){var e=this;return(0,r.filter_default)(this.nodes(),function(t){return(0,s.isEmpty_default)(e._in[t])})}sinks(){var e=this;return(0,r.filter_default)(this.nodes(),function(t){return(0,s.isEmpty_default)(e._out[t])})}setNodes(e,t){var i=arguments,n=this;return(0,r.forEach_default)(e,function(e){i.length>1?n.setNode(e,t):n.setNode(e)}),this}setNode(e,t){return Object.prototype.hasOwnProperty.call(this._nodes,e)?arguments.length>1&&(this._nodes[e]=t):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\0",this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount),this}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){var t=/* @__PURE__ */(0,h.__name)(e=>this.removeEdge(this._edgeObjs[e]),"removeEdge");delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],(0,r.forEach_default)(this.children(e),e=>{this.setParent(e)}),delete this._children[e]),(0,r.forEach_default)((0,r.keys_default)(this._in[e]),t),delete this._in[e],delete this._preds[e],(0,r.forEach_default)((0,r.keys_default)(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,t){if(!this._isCompound)throw Error("Cannot set parent in a non-compound graph");if((0,r.isUndefined_default)(t))t="\0";else{t+="";for(var i=t;!(0,r.isUndefined_default)(i);i=this.parent(i))if(i===e)throw Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var t=this._parent[e];if("\0"!==t)return t}}children(e){if((0,r.isUndefined_default)(e)&&(e="\0"),this._isCompound){var t=this._children[e];if(t)return(0,r.keys_default)(t)}else if("\0"===e)return this.nodes();else if(this.hasNode(e))return[]}predecessors(e){var t=this._preds[e];if(t)return(0,r.keys_default)(t)}successors(e){var t=this._sucs[e];if(t)return(0,r.keys_default)(t)}neighbors(e){var t=this.predecessors(e);if(t)return(0,r.union_default)(t,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var i=this;(0,r.forEach_default)(this._nodes,function(i,n){e(n)&&t.setNode(n,i)}),(0,r.forEach_default)(this._edgeObjs,function(e){t.hasNode(e.v)&&t.hasNode(e.w)&&t.setEdge(e,i.edge(e))});var n={};function s(e){var r=i.parent(e);return void 0===r||t.hasNode(r)?(n[e]=r,r):r in n?n[r]:s(r)}return(0,h.__name)(s,"findParent"),this._isCompound&&(0,r.forEach_default)(t.nodes(),function(e){t.setParent(e,s(e))}),t}setDefaultEdgeLabel(e){return(0,a.isFunction_default)(e)||(e=(0,a.constant_default)(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return(0,r.values_default)(this._edgeObjs)}setPath(e,t){var i=this,n=arguments;return(0,r.reduce_default)(e,function(e,r){return n.length>1?i.setEdge(e,r,t):i.setEdge(e,r),r}),this}setEdge(){var e,t,i,n,s=!1,a=arguments[0];"object"==typeof a&&null!==a&&"v"in a?(e=a.v,t=a.w,i=a.name,2==arguments.length&&(n=arguments[1],s=!0)):(e=a,t=arguments[1],i=arguments[3],arguments.length>2&&(n=arguments[2],s=!0)),e=""+e,t=""+t,(0,r.isUndefined_default)(i)||(i=""+i);var h=_(this._isDirected,e,t,i);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,h))return s&&(this._edgeLabels[h]=n),this;if(!(0,r.isUndefined_default)(i)&&!this._isMultigraph)throw Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[h]=s?n:this._defaultEdgeLabelFn(e,t,i);var o=d(this._isDirected,e,t,i);return e=o.v,t=o.w,Object.freeze(o),this._edgeObjs[h]=o,l(this._preds[t],e),l(this._sucs[e],t),this._in[t][h]=o,this._out[e][h]=o,this._edgeCount++,this}edge(e,t,i){var n=1==arguments.length?u(this._isDirected,arguments[0]):_(this._isDirected,e,t,i);return this._edgeLabels[n]}hasEdge(e,t,i){var n=1==arguments.length?u(this._isDirected,arguments[0]):_(this._isDirected,e,t,i);return Object.prototype.hasOwnProperty.call(this._edgeLabels,n)}removeEdge(e,t,i){var n=1==arguments.length?u(this._isDirected,arguments[0]):_(this._isDirected,e,t,i),r=this._edgeObjs[n];return r&&(e=r.v,t=r.w,delete this._edgeLabels[n],delete this._edgeObjs[n],c(this._preds[t],e),c(this._sucs[e],t),delete this._in[t][n],delete this._out[e][n],this._edgeCount--),this}inEdges(e,t){var i=this._in[e];if(i){var n=(0,r.values_default)(i);return t?(0,r.filter_default)(n,function(e){return e.v===t}):n}}outEdges(e,t){var i=this._out[e];if(i){var n=(0,r.values_default)(i);return t?(0,r.filter_default)(n,function(e){return e.w===t}):n}}nodeEdges(e,t){var i=this.inEdges(e,t);if(i)return i.concat(this.outEdges(e,t))}};function l(e,t){e[t]?e[t]++:e[t]=1}function c(e,t){--e[t]||delete e[t]}function _(e,t,i,n){var s=""+t,a=""+i;if(!e&&s>a){var h=s;s=a,a=h}return s+"\x01"+a+"\x01"+((0,r.isUndefined_default)(n)?"\0":n)}function d(e,t,i,n){var r=""+t,s=""+i;if(!e&&r>s){var a=r;r=s,s=a}var h={v:r,w:s};return n&&(h.name=n),h}function u(e,t){return _(e,t.v,t.w,t.name)}o.prototype._nodeCount=0,o.prototype._edgeCount=0,(0,h.__name)(l,"incrementOrInitEntry"),(0,h.__name)(c,"decrementOrRemoveEntry"),(0,h.__name)(_,"edgeArgsToId"),(0,h.__name)(d,"edgeArgsToObj"),(0,h.__name)(u,"edgeObjToId")});
//# sourceMappingURL=requirementDiagram-DWIR5T53.js.map
