from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer



# Create your views here.

@api_view(['GET'])
def get_comments(request):
    comments = Portfolio.objects.all()
    serializer = PortfolioSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def post_comments(request):
     if request.method == 'POST':
          serializer = PortfolioSerializer(data=request.data, partial=True)
          if serializer.is_valid(raise_exception=True):
               serializer.save()
               return Response(serializer.data, status=status.HTTP_201_CREATED)
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
