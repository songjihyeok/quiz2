import { ReactElement } from 'react';
import { Button, Space, Row, Col, Input, Form } from 'antd';
import { HeartFilled } from '@ant-design/icons';

import { ButtonType, ButtonSize } from 'antd/lib/button';

export default function Container(): ReactElement {
	const [form] = Form.useForm();

	const types: ButtonType[] = ['primary', 'default', 'text', 'ghost', 'link'];
	const sizes: ButtonSize[] = ['large', 'middle', 'small'];

	return (
		<Row gutter={[20, 20]} style={{ padding: 20 }}>
			<Col span={24}>
				<Row justify="start" align="middle" style={{ flexWrap: 'nowrap' }}>
					{types.map((type) => {
						return (
							<Col key={type} flex="1 1 auto">
								<Space size={20}>
									<Space direction="vertical">
										{sizes.map((size) => {
											return (
												<Button type={type} key={size} size={size}>
													{type}
												</Button>
											);
										})}

										{/* icon */}
										{sizes.map((size) => {
											return (
												<Button type={type} key={size} size={size} icon={<HeartFilled />}>
													{type}
												</Button>
											);
										})}
									</Space>

									<Space direction="vertical">
										{sizes.map((size) => {
											return (
												<Button type={type} key={size} size={size} disabled={true}>
													{type}
												</Button>
											);
										})}

										{/* icon */}
										{sizes.map((size) => {
											return (
												<Button type={type} key={size} size={size} disabled={true} icon={<HeartFilled />}>
													{type}
												</Button>
											);
										})}
									</Space>
								</Space>
							</Col>
						);
					})}
				</Row>
			</Col>

			<Col span={24}>
				<Row justify="start" align="middle" gutter={[16, 0]} style={{ flexWrap: 'nowrap' }}>
					{types.map((type) => {
						return (
							<Col key={type} flex="1 1 20%">
								{sizes.map((size) => {
									return (
										<Button type={type} key={size} size={size} block style={{ marginBottom: 8 }}>
											{type}
										</Button>
									);
								})}

								{/* icon */}
								{sizes.map((size) => {
									return (
										<Button type={type} key={size} size={size} icon={<HeartFilled />} block style={{ marginBottom: 8 }}>
											{type}
										</Button>
									);
								})}
							</Col>
						);
					})}
				</Row>
			</Col>

			<Col span={24}>
				<Form form={form} layout="vertical" labelAlign="left" autoComplete="off" hideRequiredMark={true}>
					<Row justify="start" align="middle" gutter={[16, 0]} style={{ flexWrap: 'nowrap' }}>
						<Col flex="1 1 auto">
							<Space direction="vertical" style={{ width: '100%' }}>
								<Form.Item label="라벨" name={1} extra="가이드 메시지" hasFeedback>
									<Input placeholder="플레이스홀더" suffix="단위" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={2} extra="가이드 메시지" hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={3} hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
							</Space>
						</Col>
						<Col flex="1 1 auto">
							<Space direction="vertical" style={{ width: '100%' }}>
								<Form.Item label="라벨" name={4} extra="가이드 메시지" hasFeedback>
									<Input placeholder="플레이스홀더" suffix="단위" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={5} extra="가이드 메시지" hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={6} hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
							</Space>
						</Col>
						<Col flex="1 1 auto">
							<Space direction="vertical" style={{ width: '100%' }}>
								<Form.Item label="라벨" name={7} extra="가이드 메시지" initialValue="입력한 텍스트" hasFeedback>
									<Input placeholder="플레이스홀더" suffix="단위" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={8} extra="가이드 메시지" initialValue="입력한 텍스트" hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={9} initialValue="입력한 텍스트" hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
							</Space>
						</Col>
					</Row>
					<Row justify="start" align="middle" gutter={[16, 0]} style={{ flexWrap: 'nowrap' }}>
						<Col flex="1 1 auto">
							<Space direction="vertical" style={{ width: '100%' }}>
								<Form.Item label="라벨" name={10} extra="가이드 메시지" validateStatus="warning" hasFeedback rules={[{ required: true, message: '에러 메시지' }]}>
									<Input placeholder="플레이스홀더" suffix="단위" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={11} extra="가이드 메시지" validateStatus="warning" hasFeedback rules={[{ required: true, message: '에러 메시지' }]}>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={12} initialValue="입력한 텍스트" validateStatus="warning" hasFeedback rules={[{ required: true, message: '에러 메시지' }]}>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
							</Space>
						</Col>

						<Col flex="1 1 auto">
							<Space direction="vertical" style={{ width: '100%' }}>
								<Form.Item label="라벨" name={13} extra="가이드 메시지" validateStatus="success" hasFeedback rules={[{ required: true, message: '성공 메시지' }]}>
									<Input placeholder="플레이스홀더" suffix="단위" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={14} extra="가이드 메시지" initialValue="입력한 텍스트" validateStatus="success" hasFeedback rules={[{ required: true, message: '성공 메시지' }]}>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
								<Form.Item label="라벨" name={15} initialValue="입력한 텍스트" validateStatus="success" hasFeedback rules={[{ required: true, message: '성공 메시지' }]}>
									<Input placeholder="플레이스홀더" allowClear={true} />
								</Form.Item>
							</Space>
						</Col>
						<Col flex="1 1 auto">
							<Space direction="vertical" style={{ width: '100%' }}>
								<Form.Item label="라벨" name={16} extra="가이드 메시지" initialValue="입력한 텍스트" hasFeedback>
									<Input placeholder="플레이스홀더" suffix="단위" allowClear={true} disabled={true} />
								</Form.Item>
								<Form.Item label="라벨" name={17} extra="가이드 메시지" initialValue="입력한 텍스트" hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} disabled={true} />
								</Form.Item>
								<Form.Item label="라벨" name={18} initialValue="입력한 텍스트" hasFeedback>
									<Input placeholder="플레이스홀더" allowClear={true} disabled={true} />
								</Form.Item>
							</Space>
						</Col>
					</Row>
				</Form>
			</Col>
		</Row>
	);
}
