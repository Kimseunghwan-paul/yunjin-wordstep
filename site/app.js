const $=s=>document.querySelector(s);
function link(selector,url){const el=$(selector);if(!url){el.hidden=true;return;}const parsed=new URL(url,location.href);if(!['http:','https:'].includes(parsed.protocol)||(parsed.origin!==location.origin&&parsed.hostname!=='github.com'))throw new Error('안전한 다운로드 주소가 아닙니다.');el.href=parsed.href;el.hidden=false;}
async function load(){
 $('#download').hidden=true;$('#loadError').hidden=true;$('#retry').hidden=true;
 try{const response=await fetch('./release.json',{cache:'no-store'});if(!response.ok)throw new Error('배포 정보를 읽을 수 없습니다.');const data=await response.json();if(!/^\d+\.\d+\.\d+$/.test(data.versionName)||!data.downloadUrl)throw new Error('배포 정보가 올바르지 않습니다.');
 $('#version').textContent='v'+data.versionName;$('#meta').textContent=`Android ${data.minAndroid} 이상 · ${(data.sizeBytes/1024).toFixed(0)} KB`;$('#download').textContent=`최신 APK 다운로드 · v${data.versionName}`;link('#download',data.downloadUrl);link('#history',data.historyUrl);link('#release',data.releaseUrl);$('#preview').hidden=!data.preview;
 $('#date').textContent=data.publishedAt?new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',year:'numeric',month:'long',day:'numeric'}).format(new Date(data.publishedAt)):'';
 const notes=$('#notes');notes.replaceChildren();let list=null;for(const raw of String(data.notes||'').split('\n')){const line=raw.trim();if(!line)continue;if(line.startsWith('- ')){if(!list){list=document.createElement('ul');notes.append(list);}const item=document.createElement('li');item.textContent=line.slice(2);list.append(item);}else{list=null;const paragraph=document.createElement('p');paragraph.textContent=line;notes.append(paragraph);}}
 }catch(error){$('#version').textContent='확인 필요';$('#meta').textContent='인터넷 연결을 확인하고 다시 시도해 주세요.';$('#download').hidden=true;$('#history').hidden=true;$('#release').hidden=true;$('#loadError').textContent='최신 버전 정보를 불러오지 못했어요.';$('#loadError').hidden=false;$('#retry').hidden=false;$('#notes').textContent='배포 정보를 불러오면 업데이트 내용이 표시됩니다.';}
}
$('#retry').onclick=load;load();
