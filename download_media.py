import os
import requests
import json

# URLS to download
downloads = [
    {
        "url": "https://lh3.googleusercontent.com/notebooklm/ANHLwAwYiwna45WXmckvJFTHO_V1C1KZYTu7dxhvLPbdRcVp8urzyVgymhD-_Ab10bB4NEdppbPexq2WTYxh7xqqIk73nrM7UAMkM51IGzTpZxv1nfra4psAPQ5BkNvzdpqIKpzsJdDTKaPrerWHIBMzqPE45DyonHA=m22-dv",
        "filename": "tema1_video.mp4"
    },
    {
        "url": "https://lh3.googleusercontent.com/notebooklm/ANHLwAxvRiEZTT50dJ4Yjtq6evR3DNfAZxYjCOc9ALbPby1lbJV7-aKXB6NjFJHGRwcUXyqQ3OzItb0lnchw4nvVlfartuo6JhqKsitYDZCZgQgIwQ_LRivU6r4BAyHc9wcvGutSzjh6dOkvW-0UftLN-Ebg-35IODg=m140-dv",
        "filename": "tema1_audio.mp3"
    },
    {
        "url": "https://contribution.usercontent.google.com/download?c=Cgpub3RlYm9va2xtEkYSD2FydGlmYWN0c19tZWRpYRozCiQ4ODRhOWM3YS00NThkLTRmOTMtODgxMi05Y2ZmNTRmZDBmM2ISCxIHEKzur9zJBRgB&filename=Barrido_Manual_Protocolo_Operativo.pdf&opi=96797242",
        "filename": "tema1_presentacion.pdf"
    },
    {
        "url": "https://lh3.googleusercontent.com/notebooklm/ANHLwAwx64uYBIsImn3QwkaQEG9iUiNgHFl8AGC9uRpdUClma2u3mehik2CFZ5NAERzGfqe_DPDCCcIRhBBxmCDBrdgyyxCxWaiFMp3GFAOHix_UY865or5oa2-pf0EI6HeycmJljZHguvrlZArkno_s8PUA10-JQ=m22-dv",
        "filename": "tema4_video.mp4"
    },
    {
        "url": "https://contribution.usercontent.google.com/download?c=Cgpub3RlYm9va2xtEkYSD2FydGlmYWN0c19tZWRpYRozCiQxZWFiYzYzOS05OWIwLTQ4NjctOGNhNi1hNmIxZjNkZGY3OWESCxIHEKzur9zJBRgB&filename=Barrido_Mixto_Preparación_de_Examen.pdf&opi=96797242",
        "filename": "tema4_presentacion.pdf"
    },
    {
        "url": "https://lh3.googleusercontent.com/notebooklm/ANHLwAwRNndO_VT6M_OBtXeHWuRFQxT7Z6lFVKifIb4-j_n5ywBM91DS4HgKr2KXAA8a6hm7hDPUYfn4OmTJbnQmoxq_3x4gVYnZRdQWscFs5kdBey2v-isrlntjCWcgsa-pudI7KOnAgczyS38RJMI5chsWHZxVQg=m22-dv",
        "filename": "tema5_video.mp4"
    },
    {
        "url": "https://contribution.usercontent.google.com/download?c=Cgpub3RlYm9va2xtEkYSD2FydGlmYWN0c19tZWRpYRozCiQzNTI1ZDMwZi1kNjcxLTRiNTMtOGUwYy1kZDNmMWRlNWYzYWYSCxIHEKzur9zJBRgB&filename=Baldeo_Manual_Simulacro_Examen.pdf&opi=96797242",
        "filename": "tema5_presentacion.pdf"
    }
]

# Cookies
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

output_dir = "c:/Users/Miguel/OneDrive/Documentos/Programacion/Proyectos/Notebooks/limasam-study-app/assets/multimedia"

print("Iniciando descarga de multimedia...")

for item in downloads:
    try:
        url = item['url']
        filename = item['filename']
        path = os.path.join(output_dir, filename)
        
        print(f"Descargando {filename}...")
        
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        
        response = requests.get(url, cookies=cookies, headers=headers, stream=True)
        response.raise_for_status()
        
        with open(path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
                
        print(f"✅ {filename} descargado correctamente ({os.path.getsize(path)} bytes)")
        
    except Exception as e:
        print(f"❌ Error descargando {filename}: {str(e)}")

print("Proceso finalizado.")
