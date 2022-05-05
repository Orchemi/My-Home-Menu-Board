from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth import get_user_model

class CustomUserCreationForm(UserCreationForm):
    
    class Meta:
        # 현재 django에서 활성화된 User 모델 가져옴
        model = get_user_model()
        # 상속하는 부모 클래스의 Meta class 내 fields, 그리고 내가 원하는 fields 추가
        fields = UserCreationForm.Meta.fields + ('email',)