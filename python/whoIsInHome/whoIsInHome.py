import csv


def whoIsInHome(toFind: list):
    with open("./whoIsInHome/macAddress.csv", "r", newline="") as macAddressList:
        listOfAddress = csv.reader(macAddressList, delimiter=",")
        peopleInHome = set()

        for row in listOfAddress:
            if row[0] in toFind:
                peopleInHome.add(row[1])

        if peopleInHome:
            return peopleInHome
        return []
