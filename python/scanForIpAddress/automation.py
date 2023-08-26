from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_browser = webdriver.Chrome()

chrome_browser.minimize_window()
chrome_browser.get("http://192.168.1.1/index2.html")

password_input = chrome_browser.find_element(By.CLASS_NAME, "userPw")

password_input.send_keys("zN2VyQW2")
password_input.send_keys(Keys.ENTER)


try:
    elem = WebDriverWait(chrome_browser, 30).until(
        EC.presence_of_element_located((By.CLASS_NAME, "wifi-title"))
    )
finally:
    chrome_browser.get("http://192.168.1.1/advConfigNetworkDhcp.html")
    try:
        elem = WebDriverWait(chrome_browser, 30).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".last span div"))
        )

    finally:
        for x in elem:
            print(x.get_attribute("innerHTML"))
