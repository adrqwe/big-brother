import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def getMacAddress():
    chrome_browser = webdriver.Chrome()

    chrome_browser.get("http://192.168.1.1/index2.html")

    try:
        password_input = WebDriverWait(chrome_browser, 30).until(
            EC.presence_of_element_located((By.ID, "login_password"))
        )
        password_input = chrome_browser.find_element(By.ID, "login_password")
        password_input.send_keys("zN2VyQW2")
        password_input.send_keys(Keys.ENTER)

    except:
        return []
    finally:
        try:
            elem = WebDriverWait(chrome_browser, 30).until(
                EC.presence_of_element_located((By.ID, "networkAdvancedTitle_Fav"))
            )
            elem = chrome_browser.find_element(By.ID, "networkAdvancedTitle_Fav")
            elem.click()
        except:
            return []
        finally:
            chrome_browser.get("http://192.168.1.1/internal/networkAdvanced/index.html")
            try:
                time.sleep(5)
                elem = WebDriverWait(chrome_browser, 30).until(
                    EC.presence_of_all_elements_located(
                        (
                            By.CSS_SELECTOR,
                            "#dchp_ip_list_dynamic_table tr td:last-child",
                        )
                    )
                )

            finally:
                array = []
                for x in elem:
                    array.append(x.get_attribute("innerHTML"))

                array.pop(0)
                return array
