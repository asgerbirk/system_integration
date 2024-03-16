from datetime import datetime


current_datetime = datetime.now()

print(current_datetime)  # 2024-02-22 08:51:10.565162 - Det her er den lokale tid.

print(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))  # her definere man sev tiden
