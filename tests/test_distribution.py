import importlib.util,json,sys,tempfile,unittest
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/"scripts"))
from common import identity,validate_source,validate_upgrade
import release
spec=importlib.util.spec_from_file_location("pages",Path(__file__).resolve().parents[1]/"scripts/make-pages.py");pages=importlib.util.module_from_spec(spec);spec.loader.exec_module(pages)
class DistributionTests(unittest.TestCase):
 def setUp(self):
  self.ident=identity();self.old={"applicationId":self.ident['applicationId'],"certificateSha256":self.ident['certificateSha256'],"versionCode":1};self.new={**self.old,"versionCode":2}
 def test_source_keeps_installed_app_and_storage_identity(self):
  ident,v=validate_source();self.assertEqual(ident['applicationId'],'com.yunjin.wordstep');self.assertEqual(ident['storageKey'],'wordstep-v1');self.assertEqual(ident['webViewHost'],'appassets.androidplatform.net');self.assertGreater(v['versionCode'],1)
 def test_original_installation_upgrade(self):validate_upgrade(self.old,self.new,self.ident)
 def test_rejects_new_key_new_package_and_old_code(self):
  for key,val in [('certificateSha256','0'*64),('applicationId','another.app'),('versionCode',1),('versionCode',0)]:
   with self.subTest(key=key,val=val),self.assertRaises(ValueError):validate_upgrade(self.old,{**self.new,key:val},self.ident)
 def test_tag_must_match_version(self):
  with patch.dict('os.environ',{'GITHUB_REPOSITORY':'testowner/testrepo'}),self.assertRaises(ValueError):release.preflight('v99.0.0')
 def test_rejects_version_below_any_published_release(self):
  _,ver=validate_source();meta={**self.new,'versionCode':ver['versionCode']+1,'tag':'v9.0.0'};published={'tag_name':'v9.0.0','body':'<!-- wordstep-release:'+json.dumps(meta)+' -->','draft':False,'prerelease':False}
  with patch.dict('os.environ',{'GITHUB_REPOSITORY':'testowner/testrepo'}),patch.object(release,'gh',return_value=json.dumps([[published]])),self.assertRaises(ValueError):release.preflight('v'+ver['versionName'])
 def test_rejects_unverifiable_existing_release(self):
  with self.assertRaises(ValueError):release.parse_release({'tag_name':'v1.0.0','body':'No identity metadata'})
 def test_first_release_preflight(self):
  _,v=validate_source()
  with patch.dict('os.environ',{'GITHUB_REPOSITORY':'testowner/testrepo'}),patch.object(release,'gh',return_value='[[]]'):release.preflight('v'+v['versionName'])
 def test_pages_links_match_displayed_version(self):
  with tempfile.TemporaryDirectory() as temp:
   root=Path(temp);meta={**self.new,'tag':'v1.0.1','versionName':'1.0.1','apkFile':'Yunjin-English.apk','sizeBytes':3,'sha256':'test','notes':'- Test release'};source=root/'release.json';source.write_text(json.dumps(meta),encoding='utf-8');pages.generate(source,root/'page','testowner/testrepo');out=json.loads((root/'page/release.json').read_text(encoding='utf-8'));self.assertEqual(out['downloadUrl'],'https://github.com/testowner/testrepo/releases/download/v1.0.1/Yunjin-English.apk');self.assertFalse(out['preview']);self.assertTrue((root/'page/.nojekyll').exists())
 def test_no_key_generation_in_build_script(self):
  text=(Path(__file__).resolve().parents[1]/'scripts/build.py').read_text(encoding='utf-8');self.assertNotIn('-genkeypair',text);self.assertIn('Never generate a replacement signing key',text)
if __name__=='__main__':unittest.main()
