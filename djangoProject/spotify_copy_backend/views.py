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
            password_check = response["passwordCheck"]
            if username == "" or email == "" or password == "" or password_check == "":
                return HttpResponse("Please enter both username and email and password", status=400)
        except KeyError:
            return HttpResponse("Please enter username, email and password!", status=422)

        if password != password_check:
            return HttpResponse("Passwords do not match!", status=401)
        new_user = User(username=username, email=email, password=password)
        new_user.save()
        return JsonResponse(User.objects.values().get(username=username), status=201)
@csrf_exempt
def user_functions(request, id):
    if request.method == 'GET':
        try:
            user = User.objects.values().get(pk=id)
        except User.DoesNotExist:
            return HttpResponse("User does not exist!", status=404, reason="User not found")

        return JsonResponse(user, status=200)
    elif request.method == 'DELETE':
        try:
            User.objects.get(pk=id).delete()
        except User.DoesNotExist:
            return HttpResponse("User does not exist!", status=404, reason="User does not exist!")
        return HttpResponse(status=204)
@csrf_exempt
def sign_in(request):
    if request.method == 'POST':
        user = json.loads(request.body)
        try:
            email = user["email"]
            password = user["password"]
        except KeyError:
            return HttpResponse("Please enter email and password!", status=422, reason="Please enter email and password!")

        try:
            if password == User.objects.values().get(email=email)["password"]:
                return HttpResponse("Login successful!", status=200)
            return HttpResponse("Password don't match", status=401, reason="Passwords don't match")
        except User.DoesNotExist:
            return HttpResponse("User not found", status=404, reason="User not found")



def autoDelete():
    for user in User.objects.all():
        if user.username != "admin":
            user.delete()
