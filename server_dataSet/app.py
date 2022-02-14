#from crypt import methods
from flask import Flask, jsonify
from modules import getDataset

app = Flask(__name__)

@app.route("/dataset_kaggle", methods = ["GET"])
def getDataset():
    a = "titanic"
    newdata = getDataset.Dataset()
    data = newdata.dataset(a)
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)