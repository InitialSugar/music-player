var plays=document.getElementById('plays');
	var pauses=document.getElementById('pauses');
	var rate=document.getElementById('rate');
	var nowtime=document.getElementById('nowtime');
	var alltime=document.getElementById('alltime');
	var musicname=document.getElementById('musicname');
	var pre=document.getElementById('pre');
	var nex=document.getElementById('nex');
	var muslist=document.getElementById('muslist');
	var muslists=muslist.getElementsByTagName('li');
	var playnow=null;
	var flag=true;
	var a=-1;
	var musics = document.createElement("AUDIO");
	document.body.appendChild(musics);
	musics.src=musicfile[0];
	musicname.innerHTML=musicfiletit[0];
	for(var i=0;i<musicfiletit.length;i++){
		var mn=musicfiletit[i];
		var li=document.createElement('li');
		var st=document.createTextNode(mn);
		li.appendChild(st);
		muslist.appendChild(li);
	}
	muslists[0].style.background="#4a392f";
	//音乐播放，时间设置显示
	function timeset(){
		musics.play();
		musics.controls=true;
		var ra=musics.duration/338;
		playnow=setInterval(function(){
			rate.style.left=musics.currentTime/ra+247+'px';	
			var pts=parseInt(musics.currentTime%60)+1;
			var ptm=parseInt(musics.currentTime/60);
			if(pts<10){
				pts='0'+pts;
			}
			if(ptm<10){
				ptm='0'+ptm;
			}
			var pt=ptm+':'+pts;
			nowtime.innerHTML=pt;
			altime();
		},1000)
	}

	function altime(){
		if(musics.readyState==4){
			var mtm=parseInt(musics.duration/60);
			var mts=parseInt(musics.duration%60);
			if(mts<10){
				mts='0'+ptm;
			}
			if(mtm<10){
				mtm='0'+mtm;
			}
			var mt=mtm+':'+mts;
			alltime.innerHTML=mt;
		}
	}

	document.body.onclick=function(e){
		var target=e.target;
		if(target.id=='plays'){
			plays.style.display='none';
			pauses.style.display='block';
			timeset();
			altime();
			setInterval(function(){
				console.log()
			},1000)
			if(musics.ended==true){
				clearInterval(playnow);
				plays.style.display='none';
				pauses.style.display='block';
				var musname=musics.currentSrc.substring(musics.currentSrc.lastIndexOf('/')+1);
				var musNameSrc="source/"+musname;
				for(var i=0;i<musicfile.length;i++){
					if(musNameSrc==musicfile[i]){
						if(a==-1){

						}else{
							muslists[a].style.background=null;
						}
						i++;
						if(i>musicfile.length-1){
							i=0;
						}
						musics.src=musicfile[i];
						musicname.innerHTML=musicfiletit[i];
						muslists[0].style.background=null;
						muslist.style.top=-44*i+'px';
						if(parseInt(muslist.style.top)<=-1135){
							muslist.style.top=-1135+'px';
						}
						muslists[i].style.background="#4a392f";
						a=i;
						break;
					}
				}
				timeset();
				altime();
			}
		}
		if(target.id=='pauses'){
			clearInterval(playnow);
			plays.style.display='block';
			pauses.style.display='none';
			musics.pause();
		}
		if(target.id=='pre'){
			clearInterval(playnow);
			plays.style.display='none';
			pauses.style.display='block';
			var musname=musics.currentSrc.substring(musics.currentSrc.lastIndexOf('/')+1);
			var musNameSrc="source/"+musname;
			for(var i=0;i<musicfile.length;i++){
				if(musNameSrc==musicfile[i]){
					if(a==-1){

					}else{
						muslists[a].style.background=null;
					}
					i--;
					if(i<0){
						i=musicfile.length-1;
					}
					musics.src=musicfile[i];
					musicname.innerHTML=musicfiletit[i];
					muslists[0].style.background=null;
					muslist.style.top=-44*(i-1)+'px';
					if(parseInt(muslist.style.top)>=0){
						muslist.style.top=0+'px';
					}
					if(parseInt(muslist.style.top)<=-1135){
						muslist.style.top=-1135+'px';
					}
					muslists[0].style.background=null;
					muslists[i].style.background="#4a392f";
					a=i;
					break;
				}
			}	
			timeset();
			altime();			
		}
		if(target.id=='nex'){
			clearInterval(playnow);
			plays.style.display='none';
			pauses.style.display='block';
			var musname=musics.currentSrc.substring(musics.currentSrc.lastIndexOf('/')+1);
			var musNameSrc="source/"+musname;
			for(var i=0;i<musicfile.length;i++){
				if(musNameSrc==musicfile[i]){
					if(a==-1){

					}else{
						muslists[a].style.background=null;
					}
					i++;
					if(i>musicfile.length-1){
						i=0;
					}
					musics.src=musicfile[i];
					musicname.innerHTML=musicfiletit[i];
					muslists[0].style.background=null;
					muslist.style.top=-44*i+'px';
					if(parseInt(muslist.style.top)<=-1135){
						muslist.style.top=-1135+'px';
					}
					muslists[i].style.background="#4a392f";
					a=i;
					break;
				}
			}
			timeset();
			altime();
		}			
		if(target.nodeName=='LI'){
			clearInterval(playnow);
			plays.style.display='none';
			pauses.style.display='block';
			for(var i=0;i<musicfiletit.length;i++){
				if(target==muslists[i]){
					if(a==-1){

					}else{
						muslists[a].style.background=null;
					}
					musics.src=musicfile[i];
					musicname.innerHTML=musicfiletit[i];
					muslists[0].style.background=null;
					target.style.background="#4a392f";
					a=i;
					break;
				}	
			}
			timeset();
			altime();
		}
	}
	document.body.onmousewheel=function(e){
		var delta=e.wheelDelta;
		var scollDistance=delta/6;
		muslist.style.top=parseInt(muslist.style.top)+scollDistance+'px';
		if(parseInt(muslist.style.top)>=0){
			muslist.style.top=0+'px';
		}
		if(parseInt(muslist.style.top)<=-1135){
			muslist.style.top=-1135+'px';
		}
		console.log(delta)
	}
