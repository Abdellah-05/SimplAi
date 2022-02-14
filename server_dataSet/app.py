from crypt import methods
from flask import Flask, jsonify
from modules import getDataset

app = Flask(__name__)

@app.route("/dataset_kaggle", methods = ["GET"])
def getDataset():
    a = str(input('name of dataset  :  '))
    newdata = getDataset.GetDataset()
    return jsonify(newdata.dataset(a))

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)
    
#host='0.0.0.0', 