/* KOI Writer	http://www.koi-writer.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Name:		writer-data.js
Author: 	Matthias Jost, Simon Siegenthaler
Created:	2011
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function getNewDocumentName()
{
	var ts = 0
    objDate = new Date();
    ts = objDate.getTime();
    name = "koi-"+ ts;
    return name;
}
function strStartsWith(string, prefix) 
{
    return string.indexOf(prefix) === 0;
}
function WD_getNumKoiDocuments()
{
    var numKoi = 0;
    var totalPairs = localStorage.length;
    for (i=0; i<totalPairs; i++) 
    {
        key = localStorage.key(i);
        if(strStartsWith(key, "koi-"))
            numKoi++;
    }
    return numKoi;
}
function WD_getKoiDocumentName(index) 
{
    var totalPairs = localStorage.length;
    var numKoi = 0;
    var pidx = 0;
    var key = 0;

    for (pidx=0; pidx<totalPairs; pidx++) 
    {
        key = localStorage.key(pidx);
        if(strStartsWith(key, "koi-"))
        {
            numKoi++;
            if((numKoi - 1) == index)
            {
                break;
            }
        }
    }
    return key;
}
function WD_getKoiDocumentSnippet(index) 
{
    var totalPairs = localStorage.length;
    var numKoi = 0;
    var pidx = 0;
    var key = 0;
    var koiDocFull = "";
    var koiDocSnippet = "";
    var start = 0
    var end = 0;

    for (pidx=0; pidx<totalPairs; pidx++) 
    {
        key = localStorage.key(pidx);
        if(strStartsWith(key, "koi-"))
        {
            numKoi++;
            if((numKoi - 1) == index)
            {
                koiDocFull = loadFromLocalStroage(key);
                break;
            }
        }
    }
    start = koiDocFull.lastIndexOf("<body>");
    start +=  6;
    end = koiDocFull.lastIndexOf("</body>");
    koiDocSnippet = koiDocFull.slice(start,end);
    //alert("koiDocSnippet: "+koiDocSnippet);
    return koiDocSnippet;
}
     
function WD_saveCurrentDocument(name, html)
{
    saveInLocalStorage(name, html);
}
function WD_loadDocument(name)
{
    return loadFromLocalStroage(name);
}
function loadFromLocalStroage(name)
{
	return localStorage.getItem(name);
}
var Setting_BG_KeyName = "setting-bg";
function WD_saveBackgroundSetting(idx)
{
	if(isLocalStorageAvailable() == false)
		return;    
    saveInLocalStorage(Setting_BG_KeyName, idx);
}
function WD_loadBackgroundSetting()
{
	if(isLocalStorageAvailable() == false)
		return 0;    
    var ret = loadFromLocalStroage(Setting_BG_KeyName);
    if(ret != null)
        return parseInt(ret);
    else
        return 0;
}

var Setting_Size_KeyName = "setting-size";
function WD_saveSizeSetting(idx)
{
	if(isLocalStorageAvailable() == false)
		return;    
    saveInLocalStorage(Setting_Size_KeyName, idx);
}
function WD_loadSizeSetting()
{
	if(isLocalStorageAvailable() == false)
		return 0;    
   var ret = loadFromLocalStroage(Setting_Size_KeyName);
    if(ret != null)
        return parseInt(ret);
    else
        return 0;
}

function saveInLocalStorage(name, value)
{
	if(isLocalStorageAvailable() == false)
		return;
	localStorage.setItem(name, value);
}

function isLocalStorageAvailable() 
{ 
	try 
	{ 
		return 'localStorage' in window && window['localStorage'] !== null; 
	} 
	catch (e) 
	{ 
		return false; 
	} 
}