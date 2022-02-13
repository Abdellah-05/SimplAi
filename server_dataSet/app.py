from flask import Flask, jsonify
from modules import getDataset

app = Flask(__name__)

@app.route("/")
def hello_world():
    a = str(input('name of dataset  :  '))
    newdata = getDataset.GetDataset()
    alldata = newdata.dataset(a)
    #print(alldata)
    #newdata.download_Dataset(alldata[0]['url'], alldata[0]['ref'])
    return jsonify(alldata)

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)
    
#host='0.0.0.0', 