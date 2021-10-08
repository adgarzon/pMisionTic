from flask import Flask, render_template,blueprints, request
import utils
import yagmail

main=blueprints.Blueprint('main',__name__)

@main.route('/')          
def index():        
    return render_template("index.html")

@main.route('/registro',methods=['GET','POST'])          
def registro():        
    if(request.method == 'POST'):
        correoUsu = request.form['tCorreo']
        nombreUsu = request.form['tNom']
        if(not utils.isEmailValid(correoUsu)):
            return "el correo {0} no es valido".format(correoUsu)
        cad  ="Hola {0}, este es un correo de prueba".format(nombreUsu)

       # clientEmail = yagmail.SMTP("angelduvan20@gmail.com","Uploading")
        #clientEmail.send(to=correoUsu,subject="Activa tu  cuenta",contents=cad)

        return render_template('login.html')
    return render_template("registro.html")