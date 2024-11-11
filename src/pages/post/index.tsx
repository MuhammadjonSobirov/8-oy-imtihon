import React from 'react';
import { Form, Input, Select, Radio, Button, Upload, InputNumber, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const RealEstateForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields() 
      .then((values) => {
        console.log('Form values:', values); 
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo); 
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Разместить объявление</h1>
      <div className='form__button'>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <Form form={form} layout="vertical">
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Категория недвижимости"
                name="category"
                rules={[{ required: true, message: 'Выберите категорию недвижимости' }]}
              >
                <Select placeholder="Выберите категорию" style={{ width: '100%' }}>
                  <Option value="apartment">Квартира</Option>
                  <Option value="house">Дом</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Цена"
                name="price"
                rules={[{ required: true, message: 'Введите цену' }]}
              >
                <Input addonAfter="UZS" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="select1" label="Выберите опцию 1" rules={[{ required: true, message: 'Выберите опцию 1' }]}>
                <Select placeholder="Опция 1" style={{ width: '100%' }}>
                  <Option value="option1">Опция 1</Option>
                  <Option value="option2">Опция 2</Option>
                  <Option value="option3">Опция 3</Option>
                </Select>
              </Form.Item>
              <Form.Item name="select2" label="Выберите опцию 2" rules={[{ required: true, message: 'Выберите опцию 2' }]}>
                <Select placeholder="Опция 2" style={{ width: '100%' }}>
                  <Option value="option1">Опция 1</Option>
                  <Option value="option2">Опция 2</Option>
                  <Option value="option3">Опция 3</Option>
                </Select>
              </Form.Item>
              <Form.Item name="select3" label="Выберите опцию 3" rules={[{ required: true, message: 'Выберите опцию 3' }]}>
                <Select placeholder="Опция 3" style={{ width: '100%' }}>
                  <Option value="option1">Опция 1</Option>
                  <Option value="option2">Опция 2</Option>
                  <Option value="option3">Опция 3</Option>
                </Select>
              </Form.Item>
              <Form.Item name="select4" label="Выберите опцию 4" rules={[{ required: true, message: 'Выберите опцию 4' }]}>
                <Select placeholder="Опция 4" style={{ width: '100%' }}>
                  <Option value="option1">Опция 1</Option>
                  <Option value="option2">Опция 2</Option>
                  <Option value="option3">Опция 3</Option>
                </Select>
              </Form.Item>
              <Form.Item name="select5" label="Выберите опцию 5" rules={[{ required: true, message: 'Выберите опцию 5' }]}>
                <Select placeholder="Опция 5" style={{ width: '100%' }}>
                  <Option value="option1">Опция 1</Option>
                  <Option value="option2">Опция 2</Option>
                  <Option value="option3">Опция 3</Option>
                </Select>
              </Form.Item>
              <Form.Item name="select6" label="Выберите опцию 6" rules={[{ required: true, message: 'Выберите опцию 6' }]}>
                <Select placeholder="Опция 6" style={{ width: '100%' }}>
                  <Option value="option1">Опция 1</Option>
                  <Option value="option2">Опция 2</Option>
                  <Option value="option3">Опция 3</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Обмен" name="exchange" rules={[{ required: true, message: 'Выберите обмен' }]}>
                <Radio.Group style={{ width: '100%' }}>
                  <Radio value="yes">Есть</Radio>
                  <Radio value="no">Нет</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Рассрочка" name="installment" rules={[{ required: true, message: 'Выберите рассрочку' }]}>
                <Radio.Group style={{ width: '100%' }}>
                  <Radio value="yes">Есть</Radio>
                  <Radio value="no">Нет</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Предоплата" name="prepayment" rules={[{ required: true, message: 'Введите сумму предоплаты' }]}>
                <Input placeholder="Введите сумму предоплаты" style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="Дополнительная информация" name="additionalInfo" rules={[{ required: true, message: 'Введите дополнительную информацию' }]}>
                <Input.TextArea rows={4} maxLength={1000} placeholder="Введите текст" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Комиссионные" name="commission" rules={[{ required: true, message: 'Выберите комиссионные' }]}>
            <Radio.Group style={{ width: '100%' }}>
              <Radio value="yes">Есть</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Количество этажей" name="floorCount" rules={[{ required: true, message: 'Введите количество этажей' }]}>
            <InputNumber min={1} placeholder="Введите количество этажей" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Номер телефона" name="phone" rules={[{ required: true, message: 'Введите номер телефона' }]}>
            <Input addonBefore="+998" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Загрузить фотографии" name="photos" rules={[{ required: true, message: 'Загрузите фотографии' }]}>
            <Upload listType="picture-card">
              <div>
                <UploadOutlined />
                <div>Загрузить фото</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" style={{ backgroundColor: '#FCA311' }}>Добавить фотографии</Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: '#FCA311', padding: '0 30px' }}
              onClick={handleSubmit} 
            >
              Опубликовать
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RealEstateForm;
