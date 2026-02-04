import os
import requests

url = "https://lh3.googleusercontent.com/notebooklm/ANHLwAwx64uYBIsImn3QwkaQEG9iUiNgHFl8AGC9uRpdUClma2u3mehik2CFZ5NAERzGfqe_DPDCCcIRhBBxmCDBrdgyyxCxWaiFMp3GFAOHix_UY865or5oa2-pf0EI6HeycmJljZHguvrlZArkno_s8PUA10-JQ=m22-dv"
filename = "tema4_video.mp4"
output_dir = "c:/Users/Miguel/OneDrive/Documentos/Programacion/Proyectos/Notebooks/limasam-study-app/assets/multimedia"
path = os.path.join(output_dir, filename)

cookies = {
    "HSID": "AlotjnlivUIt6ANL3",
    "SSID": "AmusPu0JkiiEchDQ7",
    "APISID": "fqZKKJ36HIQno1Hg/AhBGP68N1eejfkoTu",
    "SAPISID": "8o4M8E21xrtVssTd/A_982NpiVX1PoFzjD",
    "__Secure-1PAPISID": "8o4M8E21xrtVssTd/A_982NpiVX1PoFzjD",
    "__Secure-3PAPISID": "8o4M8E21xrtVssTd/A_982NpiVX1PoFzjD",
    "SID": "g.a0006Qgs95yyGubZB-bXTip8FR-wFrGGAta4fUtT4eJeWOG9eZW_P1tqETU0ddRF3PjTJaz1AAACgYKAQ4SARASFQHGX2MiFBaMIpvlvvjZXm--XmHDDRoVAUF8yKrh2S1iS-HNKlTGxBNHw0Th0076",
    "__Secure-1PSID": "g.a0006Qgs95yyGubZB-bXTip8FR-wFrGGAta4fUtT4eJeWOG9eZW_dmMHyvX2m-6hAk90_00YTgACgYKAZkSARASFQHGX2MifnQ3dKY7GsFZCBtMb0G_IhoVAUF8yKrtgWpXi3DaaExJ1pDRbzmB0076",
    "__Secure-3PSID": "g.a0006Qgs95yyGubZB-bXTip8FR-wFrGGAta4fUtT4eJeWOG9eZW_P0AbfPWkg58eRAu2WQQy4AACgYKARQSARASFQHGX2MilxxLU7UxbqjHY_DzNFnkcBoVAUF8yKoiZFx6By88KGOT2pt0xVZC0076",
    "__Secure-1PSIDTS": "sidts-CjIB7I_69O2J_8zfimKMi7LEJL_Bjemaz9coRn4LdS4H3Ex5xgNT_hPxv40OX02H6vxnNhAA",
    "__Secure-3PSIDTS": "sidts-CjIB7I_69O2J_8zfimKMi7LEJL_Bjemaz9coRn4LdS4H3Ex5xgNT_hPxv40OX02H6vxnNhAA",
    "OSID": "g.a0006Qgs98FrBPBhM3IyZSPfXYb2Lns3EQi_Cla9_VOb-NN6bOaTOzGQPrl31mWtux_xxkWRfQACgYKAasSARASFQHGX2Mie2CksciftY7_GGE2HtclHBoVAUF8yKrgVw7YPtDm3MmegdXCZMuY0076",
    "__Secure-OSID": "g.a0006Qgs98FrBPBhM3IyZSPfXYb2Lns3EQi_Cla9_VOb-NN6bOaTWTkMontYB1-0sPkUVmErlQACgYKAcISARASFQHGX2MitWaEODtIjfpnIbTcXRndJRoVAUF8yKoq-7D5ctfxBnAKIh6fVtQj0076",
    "SIDCC": "AKEyXzUFHmMxGqgJVUnBKd_o4_CFrd4-L88R5_VYX5Tu9tBUhY2Mc0WCDFzzev2dKCn0njd7Wg",
    "__Secure-1PSIDCC": "AKEyXzURWJpWP3137XtVpoeOquoITsQcnU_YNCq0-Z06tvP7fMqUgyp2_uvKwDbIIu6eGwH1Cwc",
    "__Secure-3PSIDCC": "AKEyXzU8sfduR9L2LgJZ8q6KfmY4LY-Y1DCMqRxtYgEpi8Gcdr_eiKJhiMBBlDEEK74jMBOydA"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print(f"Descargando {filename}...")
try:
    response = requests.get(url, cookies=cookies, headers=headers, stream=True)
    response.raise_for_status()
    with open(path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
    print(f"✅ {filename} descargado.")
except Exception as e:
    print(f"❌ Error: {e}")
