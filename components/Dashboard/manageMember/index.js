import React, { Component } from "react";
import { Row, Col, Table, Input } from "reactstrap";
import { Image, Modal, } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/manageMember/index.scss";

export default class ManageMember extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableCreate: [
				{ role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false },
				// { role: 'Community Member', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNo: '207 555-0119', hasResident: false, hasDeative: false }
			],
			addRecord: { role: 'Community Member', fullName: 'James Smith', email: '', phoneNo: '', hasResident: false, hasDeative: false },
			role: ['Community Member', 'Service Manger', 'HOA Bylaws'],
			setModalShow: false,
			hasEdit: false,
			editIndex: null,
			hasCheck: true,
			hasAddRow: false
		}
	}

	addRowModal = () => {
		this.setState({
			setModalShow: true
		})
	}

	addRow = () => {
		if (this.state.hasEdit) {
			let { tableCreate } = this.state;
			tableCreate[this.state.editIndex] = this.state.addRecord;

			this.setState({
				tableCreate,
				hasAddRow: true,
				setModalShow: false,
				editIndex: null,
			}, () => this.alertModal())
		} else {
			this.setState({
				tableCreate: [...this.state.tableCreate, this.state.addRecord],
				hasAddRow: true,
				setModalShow: false
			}, () => this.alertModal())
		}
	}

	alertModal = () => {
		if (this.state.hasAddRow) {
			setTimeout(() => {
				this.setState({
					hasAddRow: false,
					addRecord: { role: '', fullName: '', email: '', phoneNo: '', hasResident: false, hasDeative: false },
					hasEdit: false
				})
			}, 3000);
		}
	}

	closeAlert = () => {
		if (this.state.hasAddRow) {
			this.setState({
				hasAddRow: false,
				addRecord: { role: '', fullName: '', email: '', phoneNo: '', hasResident: false, hasDeative: false },
				hasEdit: false
			})
		}
	}

	closeModal = () => {
		this.setState({
			setModalShow: false
		})
	}

	deleteRow = (rowIndex) => {
		let filterData = this.state.tableCreate.filter((val, index) => index !== rowIndex)
		this.setState({
			tableCreate: filterData
		})
	}

	_onchange = (e) => {
		let { addRecord } = this.state;
		addRecord[e.target.name] = e.target.value
		this.setState({
			addRecord
		})
	}

	_onchangeSwitch = (e, hasChecking) => {
		let { addRecord } = this.state;
		if (hasChecking) {
			addRecord[e.target.name] = false
			this.setState({
				addRecord
			})
		} else {
			addRecord[e.target.name] = true
			this.setState({
				addRecord
			})
		}
	}

	editRow = (value, index) => {
		this.setState({
			addRecord: value,
			setModalShow: true,
			editIndex: index,
			hasEdit: true
		})
	}

	render() {
		return (
			<div className="content manage-member-component">
				<Row className="MT60 section-top">
					<Col lg="12" md="12" sm="12" className="PL35 PR35">
						<DashboardHeaderCard />
					</Col>
				</Row>
				<Row className="table-section">
					<Col md="12" className="PL30 PR30">
						<Table responsive className="scrollBarStyle-X">
							<thead>
								<tr>
									<td className='td1-m'><div><label>Role</label></div></td>
									<td className='td2-m'><div><label>Full Name</label></div></td>
									<td className='td3-m'><div><label>Email</label></div></td>
									<td className='td4-m'><div><label>Phone</label></div></td>
									<td className='td5-m'><div><label>Resident</label></div></td>
									<td className='td6-m'></td>
								</tr>
							</thead>
							<tbody className="scrollBarStyle-Y tBody">
								{this.state.tableCreate.map((val, index) => (
									<tr className="residents-table-row-modal" key={index}>
										<td className="td1-m PL30">
											<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
												<input className='input1' style={{ background: 'white' }} type='text' name="role" value={val.role} disabled />
											</div>
										</td>

										<td className="td2-m">
											<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
												<input className='input2' style={{ background: 'white' }} type='text' name='fullName' value={val.fullName} disabled />
											</div>
										</td>

										<td className="td3-m">
											<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
												<input className='input3' style={{ background: 'white' }} type='email' name="email" value={val.email} placeholder='Add Note Here' disabled />
											</div>
										</td>
										<td className="td4-m">
											<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
												<input className='input3' style={{ background: 'white' }} type='email' name="phoneNo" value={val.phoneNo} placeholder='Add Note Here' disabled />
											</div>
										</td>
										<td className="td5-m">
											<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
												<label className="container-checkbox">
													<input type="checkbox" checked={val.hasResident} disabled />
													<span className="checkmark-1"></span>
												</label>
											</div>
										</td>
										<td className="td6-m">
											<div>
												<span>
													<button className='btn' onClick={() => this.editRow(val, index)}>
														<Image className=''
															src={'/assets/mockup/edit-row.png'}
														/>
													</button>
													<button className='btn' onClick={() => this.deleteRow(index)}>
														<Image className=''
															src={'/assets/mockup/delete-table.png'}
														/>
													</button>
												</span>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</Table>

					</Col>
				</Row>
				<Row className='invite-btn-row'>
					<Col lg="12" md="12" sm="12" className="PL35 PR35">
						<span className='invite-span'>
							<button className='add-row-invitation-btn' onClick={this.addRowModal}>
								<Image className='add-btn'
									src={'/assets/mockup/add-invite-member.png'}
								/>
							</button>
							<p className='btn-text'>Add Resident</p>
						</span>
					</Col>
				</Row>
				<Modal
					show={this.state.setModalShow}
					onHide={() => this.setState({ setModalShow: false })}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					className='add-record-modal'
				>
					<Modal.Header closeButton>
						<span onClick={this.closeModal}>
							<Image className='' src={'/assets/mockup/modal-close-btn.png'} />
						</span>
					</Modal.Header>
					<Modal.Body>
						<Row className='row-1' >
							<Col>
								<p>{this.state.hasEdit ? 'Edit Member' : 'Add Member'}</p>
							</Col>
						</Row>
						<Row className='row-2'>
							<Col>
								<label>Role</label>
							</Col>
						</Row>
						<Row className='row-3'>
							<Col>
								{/* value={val.role} onChange={(e) => this.dropDownChanging(e, index)}  */}
								<div>
									{this.state.hasEdit ?
										<select className='dropDownInput' name='role' value={this.state.addRecord.role} onChange={(e) => this._onchange(e)} >
											<option key='selected' value={this.state.addRecord.role}>{this.state.addRecord.role}</option>
											{this.state.role.map((val, index) => (
												<>
													{val !== this.state.addRecord.role ?
														<option key={index} value={val}>{val}</option>
														: null
													}
												</>
											))}
										</select>
										:

										<select className='dropDownInput' name='role' value={this.state.addRecord.role} onChange={(e) => this._onchange(e)} >
											<option key='disable' value='N/A' disabled>N/A</option>
											{this.state.role.map((value, index) => (
												<option key={index} value={value}>{value}</option>
											))}
										</select>
									}

								</div>
							</Col>
						</Row>
						<Row className='row-4'>
							<Col>
								<label>Full Name</label>
							</Col>
						</Row>
						<Row className='row-5'>
							<Col>
								<Input type='text' name='fullName' value={this.state.addRecord.fullName} placeholder='Enter Full Name' onChange={(e) => this._onchange(e)} />
							</Col>
						</Row>
						<Row className='row-6'>
							<Col>
								<label>Email Address</label>
							</Col>
						</Row>
						<Row className='row-7'>
							<Col>
								<Input type='email' name='email' value={this.state.addRecord.email} placeholder='Enter Email Address' onChange={(e) => this._onchange(e)} />
							</Col>
						</Row>
						<Row className='row-8'>
							<Col>
								<label>Phone Number</label>
							</Col>
						</Row>
						<Row className='row-9'>
							<Col>
								<Input type='text' name='phoneNo' value={this.state.addRecord.phoneNo} placeholder='Enter Phone Number' onChange={(e) => this._onchange(e)} />
							</Col>
						</Row>
						<Row className='row-10'>
							<Col>
								<div className="toggle-row">
									<label>Is a Resident?:</label>
									<span>
										<label className="switch">
											<input type="checkbox" name='hasResident' onChange={(e) => this._onchangeSwitch(e, this.state.addRecord.hasResident)} checked={this.state.addRecord.hasResident} />
											<span className="slider round"></span>
										</label>
									</span>
								</div>
							</Col>
						</Row>
						<Row className='row-10'>
							<Col>
								<div className="toggle-row">
									<label>Deactive:</label>
									<span>
										<label className="switch">
											<input type="checkbox" name='hasDeative' onChange={(e) => this._onchangeSwitch(e, this.state.addRecord.hasDeative)} checked={this.state.addRecord.hasDeative} />
											<span className="slider round"></span>
										</label>
									</span>
								</div>
							</Col>
						</Row>

						<Row className='row-12'>
							<Col>
								<button onClick={this.addRow}>{this.state.hasEdit ? 'Update' : 'Save'}</button>
							</Col>
						</Row>
					</Modal.Body>
				</Modal>
				<Row className='add-row-alert' style={this.state.hasAddRow ? { display: 'flex' } : { display: 'none' }}>
					<Col>
						<div className='main-content'>
							<span className='name-role'>{this.state.addRecord.fullName} "{this.state.addRecord.role}"</span>
							<span className='type-message'>{this.state.hasEdit ? 'Update in the list' : 'Added in the list'}</span>
						</div>
						<div className='cancle-div'>
							<button onClick={this.closeAlert}>
								<Image src={'/assets/mockup/close-icon.png'} />
							</button>
						</div>
					</Col>
				</Row>
			</div>
		);
	};

}