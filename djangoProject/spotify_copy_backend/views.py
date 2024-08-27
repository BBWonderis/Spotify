import json

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        response = json.loads(request.body)

        try:
            username = response["username"]
            email = response["email"]
            password = response["password"]
            passwordCheck = response["passwordCheck"]
            if username == "" or email == "" or password == "" or passwordCheck == "":
                return HttpResponse("Please enter both username and email and password", status=400)
        except ValueError:
            return HttpResponse("Please enter username, email and password!", status=400)

        if password != passwordCheck:
            return HttpResponse("Passwords do not match!", status=400)
        new_user = User(username=username, email=email, password=password)
        new_user.save()
        return JsonResponse(User.objects.values().get(username=username), status=201)
@csrf_exempt
def user_functions(request, id):
    if request.method == 'GET':
        try:
            user = User.objects.values().get(pk=id)
        except User.DoesNotExist:
            return HttpResponse("User does not exist!", status=404)

        return JsonResponse(user, status=200)
    elif request.method == 'DELETE':
        try:
            User.objects.get(pk=id).delete()
        except User.DoesNotExist:
            return HttpResponse("User does not exist!", status=404)
        return HttpResponse(status=204)
@csrf_exempt
def sign_in(request):
    if request.method == 'POST':
        user = json.loads(request.body)
        try:
            email = user["email"]
            password = user["password"]
        except ValueError:
            return HttpResponse("Please enter email and password!", status=400)

        try:
            if password == User.objects.values().get(email=email)["password"]:
                return HttpResponse("Login successful!", status=200)
            return HttpResponse("Passwords don't match!", status=400)
        except User.DoesNotExist:
            return HttpResponse("User not found", status=404)



def autoDelete():
    for user in User.objects.all():
        if user.username != "admin":
            user.delete()
