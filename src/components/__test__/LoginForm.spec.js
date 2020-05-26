import { shallowMount } from '@vue/test-utils';
import LoginForm from '../LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정 되야 한다.', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });

  test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test', // 이메일을 입력해야 isUsernameValid가 true가 됨
        };
      },
    });
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });
});
