from django.http import HttpResponse
from django.http import JsonResponse
from django.template.loader import get_template
import requests
import json
from django.shortcuts import render

NODE_SERVER_URL = 'http://localhost:3000/render'

def index(request):
    return HttpResponse("<h1>Hello, world!</h1>")

def test_page(request):
  render_data = {
  "pageName": "Home Page",}
  page_data = {'something': 'yoyo'}
  render_data['data'] = page_data
  response_node = render_react(render_data)
  context = {
  "html": response_node.get('html'),
  "data": json.dumps(render_data)} #passing data for client
  response = render(request, 'hello-world.html',context)
  return response

def render_react(data):
   api_url = NODE_SERVER_URL
   response = requests.post(url=api_url, json=data,headers={'Content-Type': 'application/json'}).json()
   return response
