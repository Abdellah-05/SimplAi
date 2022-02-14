from flask import Flask, jsonify
#from modules import getDataset

from kaggle.api.kaggle_api_extended import KaggleApi
import os

from selenium import webdriver

from selenium.webdriver.chrome.options import Options
import time
#from pprint import pprint


class Dataset:
    def __init__(self):
        os.environ['KAGGLE_USERNAME'] = 'benmessaoud1abdellah'  #'abdellahelaaroub'
        os.environ['KAGGLE_KEY'] = '0d74a846439df0a0cb3729498ed92582'  #'f6a4b8dfccbbef8c72f5bb2f97429eee'
        self.api = KaggleApi()
        self.api.authenticate()
    
    def dataset(self, datasetName):
        self.datasets = self.api.dataset_list(search = datasetName, sort_by = 'votes')
        self.all_Datasets = list()
        for dataset in self.datasets:
            self.all_Datasets.append({
                'ref' : vars(dataset)['ref'],
                'url' : vars(dataset)['url'],
                'title' : vars(dataset)['title'],
                'subtitle' : vars(dataset)['subtitle'],
                'size' : vars(dataset)['size'],
                'viewCount' : vars(dataset)['viewCount'],
                'voteCount' : vars(dataset)['voteCount'],
            })
        return self.all_Datasets
    
    def download_Dataset(self, url, datasetName):
        path = "Download/"
        PATH = "C:\Program Files (x86)\chromedriver.exe"
                
        options = Options()
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("enable-automation")
        options.add_argument("--disable-infobars")
        options.add_argument("--disable-dev-shm-usage")
        driver = webdriver.Chrome(executable_path = PATH, options=options)
        driver.get(url)
        
        time.sleep(5)
        datasetnameFromKaggle = driver.find_element_by_xpath("//div[@role='button']//div//div").text
        
        self.api.dataset_download_file(datasetName, datasetnameFromKaggle)


app = Flask(__name__)

@app.route("/dataset_kaggle", methods = ["Get", "POST"])
def getDataset():
    a = "titanic"
    newdata = Dataset()
    return jsonify(newdata.dataset(a))

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)
    
#host='0.0.0.0', 